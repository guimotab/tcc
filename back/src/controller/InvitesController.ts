import { Request, Response } from 'express';
import { prismaPg } from "..";
import { messageResponse } from '../types/messageResponse';
import IInvites from '../interface/IInvites';

interface InviteResponse {
  resp: messageResponse
  data?: {
    invites: IInvites
  }
}

interface InviteArrayResponse {
  resp: messageResponse
  data?: {
    invites: IInvites[]
  }
}

export default abstract class InvitesController {
  static async get(req: Request, res: Response) {
    const { id } = req.params

    try {
      const invites = await prismaPg.invites.findUnique({ where: { id } })

      if (!invites) {
        return res.json({ resp: "InvalidInvite" } as InviteResponse)
      }

      return res.status(200).json({ resp: "Success", data: { invites } } as InviteResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

  static async createMany(req: Request, res: Response) {
    const { groupId, quantity } = req.body as { groupId: string, quantity: number }
    try {

      const arrayInvites = [] as IInvites[]

      for (let i = 0; i < quantity; i++) {
        // const invites = await prismaPg.invites.create({ data: { group: { connect: { id: groupId } } } })
        // arrayInvites.push(invites)
      }

      return res.status(200).json({ resp: "Success", data: { invites: arrayInvites } } as InviteArrayResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "ServerError" } as InviteResponse)
    }
  }
}