import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import { MessageResponse } from "@/types/MessageResponse"
import axios from "axios"
import IChat from "@/interfaces/Chats/IChat"

export interface ISendMessageParams {
  content: string
  chatId: string
  sender: IUser
}

export interface IChatMessageResponse {
  resp: MessageResponse
  data?: ISendMessageParams
}

export interface IChatResponse {
  resp: MessageResponse
  data?: IChat
}

export default class ChatService { 

  private apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
  private url = `${this.apiUrl}/chatMessage`

  async createChat(groupId: string) {
    const result = await axios.post(`${this.url}/createChat`, { groupId }).catch(this.handleError) as IAxiosResponse<IChatResponse>
    return result.data  
  }

  protected handleError(error: any) { 
    console.log(error)
    return { data: { resp: "AxiosError" } } as { data: { resp: MessageResponse } }
  }
}