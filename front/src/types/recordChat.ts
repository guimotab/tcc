import { IChatHistoryLoader } from "@/interfaces/IChatHistoryLoader"
type chatId = string
/**
 * Utilizado para transferir as conversas dos chats pelo messages do useContext
 * @argument chatId chave do record
 */
export type recordChat = Record<chatId, IChatHistoryLoader>