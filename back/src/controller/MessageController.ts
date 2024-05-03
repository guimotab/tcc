import { prismaMongo } from "..";
import { messageResponse } from '../types/messageResponse';
import IMessage from "../interface/Chats/IMessage";
import { Request, Response } from 'express';
import fixId from "../utils/fixId";
import ISender from "../interface/Chats/ISender";
import IStatusMessage from "../interface/Chats/IStatusMessage";

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
    senders: ISender[]
    statusMessages: IStatusMessage[]
  }
}

export default abstract class MessageController {

  static async getAllMessagesByChatId(req: Request, res: Response) {
    const { chatId } = req.params
    const idFixed = fixId(chatId)
    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, orderBy: { createdAt: "desc" } })
      return { resp: "Success", data: { messages } } as MessageArrayResponse

    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as MessageArrayResponse
    }
  }

  static async getSomeMessagesByChatId(req: Request, res: Response) {
    const { chatId, skip, take } = req.params
    const idFixed = fixId(chatId)
    const skipNumber = Number(skip)
    const takeNumber = Number(take)

    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, skip: skipNumber, take: takeNumber, orderBy: { createdAt: "desc" } })

      const senders = await Promise.all(messages.map(
        async message => await prismaMongo.sender.findUnique({ where: { messageId: message.id } })
      ).filter(message => message !== undefined)) as ISender[]

      const statusMessages = await Promise.all(messages.map(
        async message => await prismaMongo.statusMessage.findUnique({ where: { messageId: message.id } })
      )) as IStatusMessage[]
      return res.status(200).json({ resp: "Success", data: { messages, senders, statusMessages } } as MessageArrayResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" } as MessageArrayResponse)
    }
  }

}