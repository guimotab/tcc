import { prismaMongo } from "..";
import { messageResponse } from '../types/messageResponse';
import IMessage from "../interface/Chats/IMessage";
import { Request, Response } from 'express';
import fixId from "../utils/fixId";
import ISender from "../interface/Chats/ISender";
import IStatusMessage from "../interface/Chats/IStatusMessage";
import IUser from "../interface/IUser";

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
    senders: ISender[]
    statusMessages: IStatusMessage[]
    hasMoreMessagesToLoad: boolean
  }
}

interface StatusMessageArrayResponse {
  resp: messageResponse
  data?: {
    statusMessages: IStatusMessage[]
  }
}

export default abstract class MessageController {
  static async changeReadMessage(req: Request, res: Response) {
    const { statusMessages, user } = req.body as { statusMessages: IStatusMessage[], user: IUser }

    try {
      const newStatusMessage = await Promise.all(statusMessages.map(async message => {

        const findMessage = await prismaMongo.statusMessage.findMany({
          where: {
            readBy: {
              some: {
                statusMessageId: message.messageId
              }
            }
          },
          include: {
            readBy: true
          }
        })

        if (findMessage.length === 1) {
          //mensagem já lida
          return findMessage[0]
        }

        const newStatusMessage = await prismaMongo.statusMessage.update({
          where: {
            messageId: message.messageId
          },
          data: {
            readBy: {
              create: {
                name: user.name,
                userId: user.id,
              }
            }
          },
          include: { readBy: true }
        })
        return newStatusMessage
      }))

      return res.status(200).json({ resp: "Success", data: { statusMessages: newStatusMessage } } as StatusMessageArrayResponse)

    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" } as MessageArrayResponse)
    }
  }

  static async getAllMessagesByChatId(req: Request, res: Response) {
    const { chatId } = req.params
    const idFixed = fixId(chatId)
    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, orderBy: { createdAt: "desc" } })
      return res.status(200).json({ resp: "Success", data: { messages } } as MessageArrayResponse)

    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" } as MessageArrayResponse)
    }
  }

  static async getSomeMessagesByChatId(req: Request, res: Response) {
    const { chatId, skip, take } = req.params
    const idFixed = fixId(chatId)
    const skipNumber = Number(skip)
    const takeNumber = Number(take)

    try {
      const messages = await prismaMongo.message.findMany({
        where: {
          chatId: idFixed
        },
        skip: skipNumber,
        take: takeNumber,
        orderBy: {
          createdAt: "desc"
        }
      })

      const senders = await Promise.all(messages.map(
        async message => await prismaMongo.sender.findUnique({ where: { messageId: message.id } })
      ).filter(message => message !== undefined)) as ISender[]

      const statusMessages = await Promise.all(messages.map(
        async message => {
          const respStatusMessage = await prismaMongo.statusMessage.findUnique({ where: { messageId: message.id }, include: { readBy: true } })
          if (respStatusMessage && respStatusMessage.readBy.length === 0) {
            const { messageId, readBy } = respStatusMessage
            return { messageId }
          }
          return respStatusMessage
        }
      )) as IStatusMessage[]

      const findMoreMessages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, skip: skipNumber + takeNumber, take: 1 })
      let hasMoreMessagesToLoad = false
      if (findMoreMessages.length !== 0) {
        hasMoreMessagesToLoad = true
      }

      return res.status(200).json({ resp: "Success", data: { messages, senders, statusMessages, hasMoreMessagesToLoad } } as MessageArrayResponse)

    } catch (err) {

      console.log(err);
      return res.json({ resp: "ServerError" } as MessageArrayResponse)

    }
  }

}