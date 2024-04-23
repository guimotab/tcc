import { IChatMessage } from "@/app/(m2)/chat/components/ChatGroup";

/**
 * Utilizado para transferir as conversas dos chats pelo messages do useContext
 * @argument a chave do record deve ser o chatId
 */
export type recordChat = Record<string, IChatMessage[]>