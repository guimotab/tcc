import { IChatMessage } from "@/app/(m2)/chat/components/ChatGroup";
import { recordChat } from "@/types/recordChat";

export default class RecordChats {


  private _recordChats: recordChat[];

  constructor(chats: recordChat[] | []) {
    this._recordChats = chats
  }

  /**
   * Remove algum chat pelo seu id e pode substitui por outro no lugar
   * @param idGroup 
   * @param newRecordedChat novo recordChat que ficará no lugar do record retirado
   */
  spliceChat(idGroup: string, newRecordChat?: recordChat) {
    const chatFindedIndex = this.chats.findIndex(message => message && message[idGroup])
    if (newRecordChat) {
      this.chats.splice(chatFindedIndex, 1, newRecordChat)
    } else {
      this.chats.splice(chatFindedIndex, 1)
    }
  }

  /**
   * Adiciona um recordChat ao chat relacionado
   * @param chatId 
   * @param transformChatMessage Chat Message que será transformado em RecordChat
   */
  addRecordChat(groupId: string, newChatMessage: IChatMessage) {
    const findedChat = this.chats.find(chat => chat[groupId])
    if (findedChat) {
      findedChat[groupId].push(newChatMessage)
      this.spliceChat(groupId, findedChat)
    }
  }

  /**
   * Retorna a última mensagem do chat
   * @param groupId 
   */
  returnLastChatMessage(groupId: string) {
    const findedChat = this.chats.find(chat => chat[groupId])
    if (findedChat) {
      const chat = findedChat[groupId]
      const chatMessage = chat[chat.length - 1]
      return chatMessage
    }
  }

  currentChat(chatId: string) {
    const findedChat = this._recordChats.find(chat => chat[chatId])
    return findedChat
  }

  public get chats(): recordChat[] {
    return this._recordChats;
  }

  public set chats(value: recordChat[]) {
    this._recordChats = value;
  }
}