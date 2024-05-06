import IUserReadStatus from "./IUserReadMessage"

export default interface IStatusMessage {
  messageId: string
  readBy?: IUserReadStatus[]
}