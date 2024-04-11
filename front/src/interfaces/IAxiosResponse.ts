import { errorsResponse } from "@/types/errorsResponse"

export default interface IAxiosResponse<T> {
  resp: errorsResponse
  data?: T
}