import { IChatHistoryLoader } from "@/interfaces/IChatHistoryLoader";
import { IChatMessage } from "@/interfaces/IChatMessage";
import IGroup from "@/interfaces/IGroup";
import { recordChat } from "@/types/recordChat";

export default class RecordChats {

  private _recordChats: recordChat[];

  constructor(chats: recordChat[]) {
    this._recordChats = chats
  }

  /**
   * Remove algum recordChat pelo seu id e pode substitui por outro no lugar
   * @param idGroup 
   * @param newRecordedChat novo recordChat que ficará no lugar do record retirado
   */
  spliceRecordChat(idGroup: string, newRecordChat?: recordChat) {
    const chatFindedIndex = this._recordChats.findIndex(message => message && message[idGroup])
    if (newRecordChat) {
      this._recordChats.splice(chatFindedIndex, 1, newRecordChat)
    } else {
      this._recordChats.splice(chatFindedIndex, 1)
    }
  }

  /**
   * Adiciona um recordChat ao chat relacionado
   * @param chatId 
   * @param transformChatMessage Chat Message que será transformado em RecordChat
   */
  addRecordChat(groupId: string, newChatMessage: IChatMessage) {
    const findedChat = this._recordChats.find(chat => chat[groupId])
    if (findedChat) {
      findedChat[groupId].chats.push(newChatMessage)
      this.spliceRecordChat(groupId, findedChat)
    }
  }

  /**
   * Retorna a última mensagem do chat
   * @param group 
   */
  returnLastChatMessage(group: IGroup) {
    const findedChat = this._recordChats.find(chat => chat[group.id])
    if (findedChat) {
      const chat = findedChat[group.id]
      const chatMessage = chat.chats[chat.chats.length - 1]
      return chatMessage
    }
  }

  /**
   * Retorna o chat atual
   * @param group 
   * @param returnOnlyChatHistory faz com que retorne apenas o IChatHistoryLoader
   * @returns retorna IChatHistoryLoader ou recordChat
   */
  currentChat(group: IGroup, returnOnlyChatHistory: boolean) {
    const findedChat = this._recordChats.find(chat => chat[group.id])
    if (findedChat) {
      if (returnOnlyChatHistory) {
        return findedChat[group.id] as IChatHistoryLoader
      } else {
        return findedChat as recordChat
      }
    }
  }

  currentRecordObjects(chatId: string) {
    const findedChat = this._recordChats.find(chat => chat[chatId])
    return findedChat
  }

/**
 * Transforma o ChatMessage em RecordChat
 * @param group IGroup
 * @param chats array de IChatMessage
 * @param loadedOldMessages se o chat ainda não foi renderizado = false, se já foi renderizado = true
 * @returns recordChat
 */
  static transformChatMessageToRecordChat(group: IGroup, chats: IChatMessage[], loadedOldMessages: boolean) {
    return { [group.id]: { chats, loadedOldMessages } } as recordChat
  }

  public get recordChats(): recordChat[] {
    return this._recordChats;
  }

  public set recordChats(value: recordChat[]) {
    this._recordChats = value;
  }
}