import { ContentOfMessage } from "@/app/(m2)/chat/components/ChatGroup";
import IMessage from "@/interfaces/Chats/IMessage";
import IGroup from "@/interfaces/IGroup";
import MessageService, { IMessageArrayResponse, IMessageResponse } from "@/service/MessageService";
import { recordMessage } from "@/types/recordMessage";
import fixId from "@/utils/fixId";

export default abstract class MessagesController {

  private static _messageService = new MessageService();

  static async getAllByGroupId(chatId: string) {
    return await this._messageService.getAllByChatId(chatId) as IMessageResponse
  }
  static async getAllByGroupIdLimited(chatId: string, skip: number, take: number) {
    return await this._messageService.getAllByChatIdLimited(chatId, skip, take) as IMessageArrayResponse
  }

  static converterToChatMessage(group: IGroup, allMessages: recordMessage[], returnLasMessage = false) {
    const messageFinded = allMessages.find(message => message[group.id])

    if (messageFinded) {
      const groupMessages = messageFinded[group.id]

      if (groupMessages) {
        const contentMessage = groupMessages.messages.map(dataMessage => {
          const findedSender = groupMessages.senders.find(sender => sender.messageId === dataMessage.id)
          return {
            chatId: dataMessage.chatId,
            message: dataMessage,
            sender: findedSender
          } as ContentOfMessage
        })

        if(returnLasMessage){
          return contentMessage[contentMessage.length - 1]
        } 
        return contentMessage
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