import { MessageResponse } from "@/types/MessageResponse"

export default interface IAxiosResponse<T> {
  resp: MessageResponse
  data?: T
}