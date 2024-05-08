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
   * @param groupId groupId
   * @param newRecordedChat novo recordChat que ficará no lugar do record retirado
   */
  spliceRecordChat(groupId: string, newRecordChat?: recordChat) {
    const chatFindedIndex = this._recordChats.findIndex(message => message && message[groupId])
    if (newRecordChat) {
      this._recordChats.splice(chatFindedIndex, 1, newRecordChat)
    } else {
      this._recordChats.splice(chatFindedIndex, 1)
    }
  }

  /**
   * Adiciona um recordChat ao chat relacionado
   * @param groupId groupId
   * @param transformChatMessage Chat Message que será transformado em RecordChat
   */
  addRecordChat(groupId: string, newChatMessage: IChatMessage) {
    const findedChat = this._recordChats.find(chat => chat[groupId])
    if (findedChat) {
      console.log("1");
      // Faz um splice no recordChat existente, substituindo pelo novo
      findedChat[groupId].chats.push(newChatMessage)
      this.spliceRecordChat(groupId, findedChat)

    } else if (!findedChat && this._recordChats.length !== 0) {
      console.log("2");
      // adiciona primeiro recordChat no array existente
      this.createFirstRecordChat(groupId, newChatMessage, false)

    } else {
      console.log("3");
      // cria primeiro recordChat junto com o array
      this.createFirstRecordChat(groupId, newChatMessage, true)

    }
  }

  /**
   * Cria primeiro recordChat
   * @param groupId groupId
   * @param transformChatMessage Chat Message que será transformado em RecordChat
   * @param createRecordChatArray caso true, cria um recordChat[], caso false, realiza um push no primeiro recordMessage para recordChat[] existente
   */
  private createFirstRecordChat(groupId: string, firstChatMessage: IChatMessage, createRecordChatArray: boolean) {
    if (createRecordChatArray) {

      this._recordChats = [{
        [groupId]: {
          hasMoreMessagesToLoad: true,
          chats: [firstChatMessage]
        }
      }] as recordChat[]

    } else {

      this._recordChats.push(
        {
          [groupId]: {
            hasMoreMessagesToLoad: true,
            chats: [firstChatMessage]
          }
        } as recordChat
      )

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
  currentChatHistory(group: IGroup) {
    const findedChat = this._recordChats.find(chat => chat[group.id])
    if (findedChat) {
      return findedChat[group.id] as IChatHistoryLoader
    }
  }

  /**
   * Retorna o RecordChat atual
   * @param chatId string
   */
  currentRecordChat(group: IGroup) {
    const findedChat = this._recordChats.find(chat => chat[group.id])
    return findedChat as recordChat
  }

  /**
   * Transforma o ChatMessage em RecordChat
   * @param group IGroup
   * @param chats array de IChatMessage
   * @param loadedOldMessages se o chat ainda não foi renderizado = false, se já foi renderizado = true
   * @returns recordChat
   */
  static transformChatMessageToRecordChat(group: IGroup, chats: IChatMessage[], loadedOldMessages: boolean) {
    return { [group.id]: { chats, hasMoreMessagesToLoad: loadedOldMessages } } as recordChat
  }

  public get recordChats(): recordChat[] {
    return [...this._recordChats]
  }

  public set recordChats(value: recordChat[]) {
    this._recordChats = value;
  }
}