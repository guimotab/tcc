import IMessage from "@/interfaces/Chats/IMessage";
import ISender from "@/interfaces/Chats/ISender";

interface responseRecordMessage {
  messages: IMessage[]
  senders: ISender[]
}

/**
 * A chave do record é o chatId, e o message são as mensagens
 */
export type recordMessage = Record<string, responseRecordMessage>