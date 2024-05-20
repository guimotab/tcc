import { MessageResponse } from "@/types/MessageResponse"

interface IApiResponse {
  status: number
  resp: MessageResponse
  data?: any
}
export default IApiResponse