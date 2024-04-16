import { Request, Response } from 'express';
import prismaPg from "..";
import { messagesResponse } from '../types/messagesResponse';
import IUser from '../interface/IUser';
import IGroup from '../interface/IGroup';
import EmailController from './EmailController';

interface GroupResponse {
  resp: messagesResponse
  data?: {
    group: IGroup
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

export default abstract class GroupController {
  static async get(req: Request, res: Response) {
    const { id } = req.params

    try {
      const group = await prismaPg.group.findUnique({ where: { id } })

      if (!group) {
        return res.json({ resp: "Grupo não encontrado" } as GroupResponse)
      }

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "Ocorrou um error no servidor!" })
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
              role: "Admin",
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
          const invites = await prismaPg.invites.create({ data: { group: { connect: { id: group.id } } } })
          EmailController.sendEmail({ from: { email: user.email, role: "Líder", name: user.name, project: name }, link: invites.id, to: participant.email })
        }
      })

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "Ocorrou um error no servidor!" } as GroupResponse)
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params

    try {
      await prismaPg.group.delete({ where: { id } })


      return res.status(200).json({ resp: "Success" } as GroupResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "Ocorrou um error no servidor!" })
    }
  }
}