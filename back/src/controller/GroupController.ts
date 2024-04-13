import { Request, Response } from 'express';
import prismaPg from "..";
import { messagesResponse } from '../types/messagesResponse';
import IUser from '../interface/IUser';
import IGroup from '../interface/IGroup';

interface GroupResponse {
  resp: messagesResponse
  data?: {
    group: IGroup
  }
}

export default abstract class GroupController {
  static async get(req: Request, res: Response) {
    const { groupId } = req.params

    try {
      const group = await prismaPg.group.findUnique({ where: { id: groupId } })

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
    const { name, description, user } = req.body as { name: string, description: string, user: IUser }

    try {
      const group = await prismaPg.group.create({
        data: {
          name,
          description,
          users: {
            create: {
              role: "admin",
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

      return res.status(200).json({ resp: "Success", data: { group } } as GroupResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "Ocorrou um error no servidor!" } as GroupResponse)
    }
  }
}