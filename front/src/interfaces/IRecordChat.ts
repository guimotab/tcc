import { IChatMessage } from "./Chats/IChatMessage"

/**
 * interface utilizada para manipular as conversas dos chats pelo messages do useContext
 */
export interface IRecordChat {
  groupId: string
  hasMoreMessagesToLoad: boolean
  chats: IChatMessage[]
}