import { prismaMongo } from "..";
import { messageResponse } from '../types/messageResponse';
import IMessage from "../interface/Chats/IMessage";
import { Request, Response } from 'express';
import fixId from "../utils/fixId";
import ISender from "../interface/Chats/ISender";

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
    senders: ISender[]
  }
}

export default abstract class MessageController {

  static async getAllMessagesByChatId(req: Request, res: Response) {
    const { chatId } = req.params
    const idFixed = fixId(chatId)

    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, orderBy: { createdAt: "asc" } })
      return { resp: "Success", data: { messages } } as MessageArrayResponse

    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as MessageArrayResponse
    }
  }

  static async getAllMessagesByChatIdLimited(req: Request, res: Response) {
    const { chatId, skip, take } = req.params
    const idFixed = fixId(chatId)
    const skipNumber = Number(skip)
    const takeNumber = Number(take)

    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, skip: skipNumber, take: takeNumber, orderBy: { createdAt: "desc" } })

      const senders = await Promise.all(messages.map(
        async message => await prismaMongo.sender.findUnique({ where: { messageId: message.id } })
      ).filter(message => message !== undefined)) as ISender[]

      return res.status(200).json({ resp: "Success", data: { messages, senders } } as MessageArrayResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" } as MessageArrayResponse)
    }
  }

}