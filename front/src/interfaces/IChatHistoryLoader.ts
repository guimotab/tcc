import { IChatMessage } from "./IChatMessage"

/**
 * interface que guarda o histórico do chat
 */
export interface IChatHistoryLoader {
  hasMoreMessagesToLoad: boolean
  chats: IChatMessage[]
}