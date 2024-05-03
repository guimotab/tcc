import IMessage from "./Chats/IMessage"
import ISender from "./Chats/ISender"
import IStatusMessage from "./Chats/IStatusMessage"

/**
 * Interface padrão que o chat utiliza na renderização das mensagens
 */
export interface IChatMessage {
  message: IMessage
  sender: ISender
  statusMessage: IStatusMessage
  chatId: string
}