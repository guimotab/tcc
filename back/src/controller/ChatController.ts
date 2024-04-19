import { prismaMongo } from "..";
import { messageResponse } from '../types/messageResponse';
import IChat from "../interface/Chats/IChat";
import IUser from "../interface/IUser";
import IMessage from "../interface/Chats/IMessage";
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
  }
}

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
  }
}

interface ISendMessageParams {
  content: string
  chatId: string
  sender: IUser
}

export default abstract class ChatController {
  static async getAllMessages(chatId: string) {
    const idFixed = this.fixId(chatId)
    try {
      const messages = await prismaMongo.message.findMany({ where: { chatId: idFixed } })
      return { resp: "Success", data: { messages } } as MessageArrayResponse

    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as MessageArrayResponse
    }
  }

  static async sendMessage({ content, sender, chatId }: ISendMessageParams) {
    const idFixed = this.fixId(chatId)
    const senderId = this.fixId(sender.id)
    try {
      const message = await prismaMongo.message.create({
        data: {
          content,
          chat: {
            connect: { id: idFixed }
          },
          sender: {
            create: {
              idUser: senderId,
              name: sender.name
            }
          },
        }
      })
      return { resp: "Success", data: { message } } as MessageResponse
    } catch (err){
      console.log(err);
      return { resp: "ServerError" } as MessageResponse
    }
  }

  static async createChat(groupId: string) {
    const idFixed = this.fixId(groupId)
    try {
      const chat = await prismaMongo.chatGroup.create({ data: { id: idFixed } })

      return { resp: "Success", data: { chat } } as ChatResponse 
    } catch (err) {
      console.log(err);
      return { resp: "ServerError" } as ChatResponse
    }
  }

  private static fixId(groupId: string) {
    const idFixed = groupId.replaceAll("-", "").substring(0, 24)
    return idFixed
  }
}