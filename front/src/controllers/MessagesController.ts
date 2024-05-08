import RecordChats from "@/classes/RecordChats";
import IMessage from "@/interfaces/Chats/IMessage";
import ISender from "@/interfaces/Chats/ISender";
import IStatusMessage from "@/interfaces/Chats/IStatusMessage";
import { IChatMessage } from "@/interfaces/IChatMessage";
import IGroup from "@/interfaces/IGroup";
import IUser from "@/interfaces/IUser";
import MessageService, { IMessageArrayResponse, IMessageResponse, IStatusMessageResponse } from "@/service/MessageService";
import { recordChat } from "@/types/recordChat";

export interface responseRecordMessage {
  messages: IMessage[]
  senders: ISender[]
  statusMessages: IStatusMessage[]
  hasMoreMessagesToLoad: boolean
}

export default abstract class MessagesController {



  private static _messageService = new MessageService();

  /**
   * Modifica o status das mensagens não lidas para lida
   * @param group IGroup
   * @param currentUser usuário atual
   * @param recordChat RecordChats
   * @param currentChat array de IChatMessage
   * @returns array de IChatMessage com as mensagens lidas
   */
  static async ReadMessages(group: IGroup, currentUser: IUser, recordChat: RecordChats, currentChat: IChatMessage[]) {
    const messegesDontRead = currentChat.filter(message => {

      const messageSendByCurrentUser = message.sender.idUser === currentUser.id
      if (messageSendByCurrentUser) {
        return false
      }

      const readByExist = message.statusMessage.readBy
      const wasReadByCurrentUser = readByExist && readByExist.find(readBy => readBy.userId === currentUser.id)
      if (!wasReadByCurrentUser) {
        return true
      }
    })
    const unreadMessages = messegesDontRead.map(message => ({
      id: message.message.id,
      messageId: message.message.id,
      readBy: message.statusMessage.readBy
    } as IStatusMessage))

    const respStatusMessage = await this._messageService.readMessages(unreadMessages, currentUser) as IStatusMessageResponse

    if (respStatusMessage.data) {

      const fakeMessages = [...currentChat]
      respStatusMessage.data.statusMessages.forEach(readMessage => {
        const index = currentChat.findIndex(message => readMessage.messageId === message.statusMessage.messageId)
        const currentMessages = currentChat[index]
        const arrayReadByCurrentMessages = currentMessages.statusMessage.readBy
        fakeMessages.splice(index, 1, {
          ...currentMessages,
          statusMessage: {
            messageId: currentMessages.statusMessage.messageId,
            readBy: arrayReadByCurrentMessages ?
              [...arrayReadByCurrentMessages, ...readMessage.readBy!]
              :
              [...readMessage.readBy!]
          }
        })
      })

      recordChat.spliceRecordChat(group.id, RecordChats.transformChatMessageToRecordChat(group, fakeMessages, true))
      return recordChat.currentChatHistory(group)
    }
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
   * Busca mensagens de todos os grupos no servidor e transforma em recordChat[]
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

        const chatMessage = this.converterToRecordChat(group, dataMessages, dataMessages.hasMoreMessagesToLoad) as recordChat
        if (chatMessage) {
          return chatMessage
        }
      }
    }))

    const filteredMessages = chatMessage.filter(message => message !== undefined) as recordChat[]
    return filteredMessages
  }

  /**
   * Busca mensagens do grupo atual no servidor e transforma em recordChat
   * @param group IGroup
   * @param skip quantidade de mensagens que serão ignoradas na requisição
   * @param take quantidade de mensagens que serão pegas na requisição
   * @returns retorna mensagens no formato recordChat
   */
  static async transformOneChatToRecord(group: IGroup, skip: number, take: number) {
    const messageResp = await MessagesController.getSomeByGroupId(group, skip, take)
    const dataMessages = messageResp.data

    if (dataMessages && dataMessages.messages.length !== 0) {

      const chatMessage = this.converterToRecordChat(group, dataMessages, dataMessages.hasMoreMessagesToLoad) as recordChat
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
  private static converterToRecordChat(group: IGroup, allMessages: responseRecordMessage, hasMoreMessagesToLoad: boolean) {
    if (allMessages) {

      const contentMessage = allMessages.messages.map(dataMessage => {

        const findedSender = allMessages.senders.find(sender => sender.messageId === dataMessage.id)
        const statusMessage = allMessages.statusMessages.find(sender => sender.messageId === dataMessage.id)
        return { chatId: group.id, message: dataMessage, sender: findedSender, statusMessage: statusMessage } as IChatMessage

      })

      const recordMessage = { [group.id]: { chats: contentMessage.reverse(), hasMoreMessagesToLoad } } as recordChat
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