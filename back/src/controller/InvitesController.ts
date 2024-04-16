import { Request, Response } from 'express';
import prismaPg from "..";
import { messagesResponse } from '../types/messagesResponse';
import IInvites from '../interface/IInvites';
import EmailController from './EmailController';

interface InviteResponse {
  resp: messagesResponse
  data?: {
    invites: IInvites
  }
}

interface InviteArrayResponse {
  resp: messagesResponse
  data?: {
    invites: IInvites[]
  }
}

export default abstract class InvitesController {
  static async get(req: Request, res: Response) {
    const { inviteId } = req.params

    try {
      const invites = await prismaPg.invites.findUnique({ where: { id: inviteId } })

      if (!invites) {
        return res.json({ resp: "Convite inexistente" } as InviteResponse)
      }

      return res.status(200).json({ resp: "Success", data: { invites } } as InviteResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "Ocorrou um error no servidor!" })
    }
  }

  static async createMany(req: Request, res: Response) {
    const { groupId, quantity } = req.body as { groupId: string, quantity: number }
    try {

      const arrayInvites = [] as IInvites[]

      for (let i = 0; i < quantity; i++) {
        const invites = await prismaPg.invites.create({ data: { group: { connect: { id: groupId } } } })
        arrayInvites.push(invites)
      }

      return res.status(200).json({ resp: "Success", data: { invites: arrayInvites } } as InviteArrayResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "Ocorrou um error no servidor!" } as InviteResponse)
    }
  }
}