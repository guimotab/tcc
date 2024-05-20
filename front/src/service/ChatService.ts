import IUser from "@/interfaces/IUser"
import IApiResponse from "@/interfaces/api/IApiResponse"
import { prismaMongo } from "@/lib/prisma"
import fixId from "@/utils/fixId"

interface ISendMessageParams {
  content: string
  chatId: string
  sender: IUser
}

export default abstract class ChatService {

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
        return { resp: "MessageNotFound", status: 400 } as IApiResponse
      }
      const { statusMessage, sender, ...onlyMessage } = message

      return { resp: "Success", data: { message: onlyMessage, sender, statusMessage }, status: 200 } as IApiResponse
    } catch (err) {
      console.log(err);
      return { resp: "ServerError", status: 500 } as IApiResponse
    }
  }

  static async createChat(groupId: string) {
    const idFixed = fixId(groupId)
    try {
      const chat = await prismaMongo.chatGroup.create({ data: { id: idFixed } })

      if (!chat) {
        return { resp: "ChatNotFound", status: 400 } as IApiResponse
      }

      return { resp: "Success", data: chat, status: 200 } as IApiResponse
    } catch (err) {
      console.log(err);
      return { resp: "ServerError", status: 500 } as IApiResponse
    }
  }
}