import { Request, Response } from 'express';
import { prismaMongo, prismaPg } from "..";
import { messageResponse } from '../types/messageResponse';
import IUser from '../interface/IUser';
import IGroup from '../interface/IGroup';
import EmailController from './EmailController';
import IInvites from '../interface/IInvites';
import IUserOnGroup from '../interface/IUserOnGroup';
import ChatController from './ChatController';

interface GroupResponse {
  resp: messageResponse
  data?: {
    group: IGroup
  }
}

interface GroupArrayResponse {
  resp: messageResponse
  data?: {
    userOnGroups: IUserOnGroup[]
    groups: IGroup[]
  }
}

interface createGroup {
  name: string,
  user: IUser
  description?: string,
  quantity: number
  participants: {
    email: string
    role: string
  }[]
}

interface addParticipantReq {
  invite: IInvites
  participant: IUser
}

export default abstract class GroupController {
  static async get(req: Request, res: Response) {
    const { id } = req.params

    try {
      const group = await prismaPg.group.findUnique({ where: { id } })

      if (!group) {
        return res.json({ resp: "GroupNotFound" } as GroupResponse)
      }

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

  static async getAllByUserId(req: Request, res: Response) {
    const { userId = "" } = req.params

    try {

      const userOnGroups = await prismaPg.userOnGroup.findMany({ where: { userId } })
      if (!userOnGroups) {
        return res.json({ resp: "GroupNotFound" } as GroupArrayResponse)
      }

      //todos os grupos que o usuário logado está
      const groups = await Promise.all(userOnGroups.map(async (group) => {

        const respGroup = await prismaPg.group.findUnique({ where: { id: group.groupId } });
        if (respGroup) {
          return respGroup
        }

      }).filter(group => group !== undefined)) as IGroup[]
      if (!groups) {
        return res.json({ resp: "GroupNotFound" } as GroupArrayResponse)
      }

      return res.status(200).json({ resp: "Success", data: { userOnGroups, groups } } as GroupArrayResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

  static async addNewParticipant(req: Request, res: Response) {
    const { invite, participant } = req.body as addParticipantReq
    try {
      const participantAlreadyExist = await prismaPg.userOnGroup.findUnique({ where: { userId_groupId: { userId: participant.id, groupId: invite.groupId } } })

      if (participantAlreadyExist) {
        return res.json({ resp: "UserExistOnGroup" } as GroupResponse)
      }

      const group = await prismaPg.group.update({
        data: {
          users: {
            create: {
              role: invite.role,
              user: {
                connect: {
                  id: participant.id
                }
              },
              assignedBy: participant.name
            }
          }
        },
        where: { id: invite.groupId }
      })

      if (!group) {
        return res.json({ resp: "GroupNotFound" } as GroupResponse)
      }

      await prismaPg.invites.delete({ where: { id: invite.id } })

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

  static async create(req: Request, res: Response) {
    const { name, description = "", user, participants } = req.body as createGroup
    try {
      const group = await prismaPg.group.create({
        data: {
          name,
          description,
          users: {
            create: {
              role: "Líder",
              assignedBy: user.name,
              user: {
                connect: {
                  id: user.id
                }
              },
            }
          }
        }
      })

      participants.forEach(async participant => {
        if (participant.email !== user.email) {
          const invites = await prismaPg.invites.create({ data: { role: participant.role, group: { connect: { id: group.id } } } })
          EmailController.sendEmail({
            from: { email: user.email, role: "Líder", name: user.name, project: name },
            link: invites.id,
            to: participant
          })
        }
      })

      const respChat = await ChatController.createChat(group.id)
      if (respChat.resp === "ServerError") {
        throw new Error()
      }

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "ServerError" } as GroupResponse)
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params

    try {
      await prismaPg.group.delete({ where: { id } })


      return res.status(200).json({ resp: "Success" } as GroupResponse) 
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }
}