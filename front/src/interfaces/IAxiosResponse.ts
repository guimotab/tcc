import { messageResponse } from "@/types/messageResponse"

export default interface IAxiosResponse<T> {
  resp: messageResponse
  data?: T
}