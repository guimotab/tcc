import { IChatMessage } from "@/app/(m2)/chat/components/ChatGroup";
import IMessage from "@/interfaces/Chats/IMessage";
import ISender from "@/interfaces/Chats/ISender";
import IGroup from "@/interfaces/IGroup";
import MessageService, { IMessageArrayResponse, IMessageResponse } from "@/service/MessageService";
import { recordMessage } from "@/types/recordMessage";
import fixId from "@/utils/fixId";

export default abstract class MessagesController {

  private static _messageService = new MessageService();

  static async getAllByGroupId(chatId: string) {
    return await this._messageService.getAllByChatId(chatId) as IMessageResponse
  }
  static async getAllByGroupIdLimited(groupId: string, skip: number, take: number) {
    return await this._messageService.getAllByChatIdLimited(groupId, skip, take) as IMessageArrayResponse
  }

  /**
   * Função que retorna um array de recordMessage do getAll das mensagens do banco 
   * @param groups Array de IGroup
   * @param skip Posição de início na busca no banco
   * @param take Quantidade de elementos que serão trazidos do banco
   * @returns array de recordMessage
   */
  static async constructAllRecordMessages(groups: IGroup[], skip: number, take: number) {
    const messages = await Promise.all(groups.map(async group => {
      const messageResp = await MessagesController.getAllByGroupIdLimited(group.id, skip, take)
      if (messageResp.data && messageResp.data.messages.length !== 0) {
        const dataMessages = messageResp.data
        const recordMessage = MessagesController.constructRecordMessage(dataMessages)
        return recordMessage
      }
    })) as recordMessage[]
    return messages
  }

  /**
     * Função que retorna um recordMessage 
     * @param dataMessages Objeto que contém elemento do tipo IMessage[] e ISender[]
     * @returns recordMessage
     */
  static constructRecordMessage(dataMessages: { messages: IMessage[]; senders: ISender[]; }) {
    const chatId = dataMessages.messages[0].chatId
    const recordMessage = {
      [chatId]: dataMessages
    }
    return recordMessage as recordMessage
  }

  static converterToChatMessage(group: IGroup, allMessages: recordMessage[], returnLastMessage = false) {
    const convertedId = fixId(group.id)
    const messageFinded = allMessages.find(message => message && message[convertedId])

    if (messageFinded) {
      const groupMessages = messageFinded[convertedId]

      if (groupMessages) {
        const contentMessage = groupMessages.messages.map(dataMessage => {
          const findedSender = groupMessages.senders.find(sender => sender.messageId === dataMessage.id)
          return {
            chatId: dataMessage.chatId,
            message: dataMessage,
            sender: findedSender
          } as IChatMessage
        })

        if (returnLastMessage) {
          return contentMessage.reverse()[contentMessage.length - 1]
        }
        return contentMessage.reverse()
      }
    }
  }

  // static async get(id: string) {
  //   return await this._messageService.get(id) as IMessageResponse
  // }
  // static async create(data: IGroup, user: IUser, participants: IParticipantsGroup[]) {
  //   const newData = { ...data, user, participants }
  //   return await this._messageService.post(newData) as IMessageResponse
  // }
  // static async put(id: string, data: IGroup) {
  //   return await this._messageService.put(id, data) as IMessageResponse
  // }
  // static async delete(id: string) {
  //   return await this._messageService.delete(id) as IMessageResponse
  // }

}