import { IRecordChat } from "@/interfaces/IRecordChat";
import { IChatMessage } from "@/interfaces/IChatMessage";
import IGroup from "@/interfaces/IGroup";

export default class RecordChats {

  private _recordChats: IRecordChat[];

  constructor(chats: IRecordChat[]) {
    this._recordChats = chats
  }

  /**
   * Remove algum recordChat pelo seu id e pode substitui por outro no lugar
   * @param groupId groupId
   * @param newRecordedChat novo recordChat que ficará no lugar do record retirado
   */
  spliceRecordChat(groupId: string, newRecordChat?: IRecordChat) {
    const chatFindedIndex = this._recordChats.findIndex(message => message && (message.groupId === groupId))
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
    const findedChat = this._recordChats.find(chat => chat.groupId === groupId)
    if (findedChat) {
      // Faz um splice no recordChat existente, substituindo pelo novo
      findedChat.chats.push(newChatMessage)
      this.spliceRecordChat(groupId, findedChat)

    } else if (!findedChat && this._recordChats.length !== 0) {
      // adiciona primeiro recordChat no array existente
      this.createFirstRecordChat(groupId, newChatMessage, false)

    } else {
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
        groupId,
        hasMoreMessagesToLoad: false,
        chats: [firstChatMessage]
      }] as IRecordChat[]

    } else {
      this._recordChats.push(
        {
          groupId,
          hasMoreMessagesToLoad: false,
          chats: [firstChatMessage]
        } as IRecordChat
      )
    }
  }

  /**
   * Retorna a última mensagem do chat
   * @param group 
   */
  returnLastChatMessage(group: IGroup) {
    const findedChat = this._recordChats.find(chat => chat.groupId === group.id)
    if (findedChat) {
      const chatMessage = findedChat.chats[findedChat.chats.length - 1]
      return chatMessage
    }
  }

  /**
   * Retorna o RecordChat atual
   * @param chatId string
   */
  currentRecordChat(group: IGroup) {
    const findedChat = this._recordChats.find(chat => chat.groupId === group.id)
    if (findedChat) {
      return findedChat
    }
  }

  /**
   * Transforma o ChatMessage em RecordChat
   * @param group IGroup
   * @param chats array de IChatMessage
   * @param loadedOldMessages se o chat ainda não foi renderizado = false, se já foi renderizado = true
   * @returns recordChat
   */
  static transformChatMessageToRecordChat(group: IGroup, chats: IChatMessage[], hasMoreMessagesToLoad: boolean) {
    return { groupId: group.id, chats, hasMoreMessagesToLoad } as IRecordChat
  }

  public get recordChats(): IRecordChat[] {
    return [...this._recordChats]
  }

  public set recordChats(value: IRecordChat[]) {
    this._recordChats = value;
  }
}