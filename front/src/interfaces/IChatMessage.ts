import IMessage from "./Chats/IMessage"
import ISender from "./Chats/ISender"

/**
 * Interface padrão que o chat utiliza na renderização das mensagens
 */
export interface IChatMessage {
  message: IMessage
  sender: ISender
  chatId: string
}