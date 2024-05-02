import { IChatMessage } from "./IChatMessage"

/**
 * interface que guarda o histórico do chat
 */
export interface IChatHistoryLoader {
  loadedOldMessages: boolean
  chats: IChatMessage[]
}