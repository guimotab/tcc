import IMessage from "./IMessage"
import ISender from "./ISender"
import IStatusMessage from "./IStatusMessage"

/**
 * Interface padrão que o chat utiliza na renderização das mensagens
 */
export interface IChatMessage {
  message: IMessage
  sender: ISender
  statusMessage: IStatusMessage
  chatId: string
}