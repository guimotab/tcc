import { prismaMongo } from "..";
import { messageResponse } from '../types/messageResponse';
import IChat from "../interface/Chats/IChat";
import IUser from "../interface/IUser";
import IMessage from "../interface/Chats/IMessage";
import fixId from "../utils/fixId";
import ISender from "../interface/Chats/ISender";
import IStatusMessage from "../interface/Chats/IStatusMessage";
interface ChatResponse {
  resp: messageResponse
  data?: {
    chat: IChat
  }
}

interface MessageResponse {
  resp: messageResponse
  data?: {
    message: IMessage
    sender: ISender
    statusMessage: IStatusMessage
  }
}

interface ISendMessageParams {
  content: string
  chatId: string
  sender: IUser
}

export default abstract class ChatController {

  static async sendMessage({ content, sender: userSender, chatId }: ISendMessageParams) {
    const idFixed = fixId(chatId)
    try {
      const message = await prismaMongo.message.create({
        data: {
          content,
          chat: {
            connect: { id: idFixed }
          },
          sender: {
            create: {
              idUser: userSender.id,
              name: userSender.name
            }
          },
          statusMessage: {
            create: {
              readBy: undefined
            }
          }
        },
        include: { sender: true, statusMessage: true }
      })

      if (!message) {
        return { resp: "MessageNotFound" } as MessageResponse
      }
      const { statusMessage, sender, ...onlyMessage } = message

      return { resp: "Success", data: { message: onlyMessage, sender, statusMessage } } as MessageResponse
    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as MessageResponse
    }
  }

  static async createChat(groupId: string) {
    const idFixed = fixId(groupId)
    try {
      const chat = await prismaMongo.chatGroup.create({ data: { id: idFixed } })

      if (!chat) {
        return { resp: "ChatNotFound" } as MessageResponse
      }

      return { resp: "Success", data: { chat } } as ChatResponse
    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as ChatResponse
    }
  }

}