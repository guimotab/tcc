import IMessage from "@/interfaces/Chats/IMessage";
import ISender from "@/interfaces/Chats/ISender";
import IStatusMessage from "@/interfaces/Chats/IStatusMessage";
import { IChatMessage } from "@/interfaces/IChatMessage";
import IGroup from "@/interfaces/IGroup";
import IUser from "@/interfaces/IUser";
import MessageService, { IMessageArrayResponse, IMessageResponse } from "@/service/MessageService";
import { recordChat } from "@/types/recordChat";

export interface responseRecordMessage {
  messages: IMessage[]
  senders: ISender[]
  statusMessages: IStatusMessage[]
}

export default abstract class MessagesController {



  private static _messageService = new MessageService();

  /**
   * Modifica o status das mensagens não lidas para lida
   * @param messages array de IChatMessage
   * @returns 
   */
  static async statusReadMessage(currentUser: IUser, messages: IChatMessage[]) {
    messages.filter(message => message.statusMessage.readBy.find(userRead=> userRead === currentUser))
    return await this._messageService.statusReadMessage(quantity) as IMessageResponse
  }

  /**
   * Retorna todas as mensagens pelo id do Grupo
   * @param group IGroup 
   */
  static async getAllByGroupId(group: IGroup) {
    return await this._messageService.getAllByChatId(group.id) as IMessageResponse
  }

  /**
   * Retorna algumas mensagens pelo id do Grupo
   * @param group IGroup 
   * @param skip quantidade de mensagens que você vai pular na requisição
   * @param take quantidade de mensagens que você vai retornar na requisição
   */
  static async getSomeByGroupId(group: IGroup, skip: number, take: number) {
    return await this._messageService.getSomeByChatId(group.id, skip, take) as IMessageArrayResponse
  }

  /**
   * Função que retorna um array de recordMessage, facilitando a gravação das mensagens para se fazer busca depois
   * @param groups Array de IGroup
   * @param skip Posição de início na busca no banco
   * @param take Quantidade de elementos que serão trazidos do banco
   * @returns array de recordMessage
   */
  static async tranformAllChatsToRecord(groups: IGroup[], skip: number, take: number) {

    const chatMessage = await Promise.all(groups.map(async group => {
      const messageResp = await MessagesController.getSomeByGroupId(group, skip, take)
      const dataMessages = messageResp.data

      if (dataMessages && dataMessages.messages.length !== 0) {

        const chatMessage = this.converterToRecordChat(group, dataMessages) as recordChat
        if (chatMessage) {
          return chatMessage
        }
      }
    }))

    const filteredMessages = chatMessage.filter(message => message !== undefined) as recordChat[]
    return filteredMessages
  }

  static async transformOneChatToRecord(group: IGroup, skip: number, take: number) {
    const messageResp = await MessagesController.getSomeByGroupId(group, skip, take)
    const dataMessages = messageResp.data

    if (dataMessages && dataMessages.messages.length !== 0) {

      const chatMessage = this.converterToRecordChat(group, dataMessages) as recordChat
      if (chatMessage) {
        return chatMessage
      }
    }
  }

  /**
   * Utilizada para converter um objeto de mensagens e senders em um objeto que facilita a gravação deles
   * @param group grupo atual
   * @param allMessages objeto que contenha o array de messages e senders
   */
  private static converterToRecordChat(group: IGroup, allMessages: responseRecordMessage) {
    if (allMessages) {

      const contentMessage = allMessages.messages.map(dataMessage => {

        const findedSender = allMessages.senders.find(sender => sender.messageId === dataMessage.id)
        const statusMessage = allMessages.statusMessages.find(sender => sender.messageId === dataMessage.id)
        return { chatId: group.id, message: dataMessage, sender: findedSender, statusMessage: statusMessage } as IChatMessage

      })

      const recordMessage = { [group.id]: { chats: contentMessage.reverse(), loadedOldMessages: false } } as recordChat
      return recordMessage
    }
  }

  static async put(id: string, data: IMessage) {
    return await this._messageService.put(id, data) as IMessageResponse
  }
  // static async get(id: string) {
  //   return await this._messageService.get(id) as IMessageResponse
  // }
  // static async create(data: IGroup, user: IUser, participants: IParticipantsGroup[]) {
  //   const newData = { ...data, user, participants }
  //   return await this._messageService.post(newData) as IMessageResponse
  // }
  // static async delete(id: string) {
  //   return await this._messageService.delete(id) as IMessageResponse
  // }

}