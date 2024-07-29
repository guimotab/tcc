import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import { responseRecordMessage } from "@/controllers/MessagesController"
import IStatusMessage from "@/interfaces/Chats/IStatusMessage"
import { User } from "@prisma/client"

export interface IMessageResponse {
  resp: MessageResponse
  data?: {
    messages: IMessage
  }
}

export interface IStatusMessageResponse {
  resp: MessageResponse
  data?: {
    statusMessages: IStatusMessage[]
  }
}

export interface IMessageArrayResponse {
  resp: MessageResponse
  data?: responseRecordMessage
}

export default class MessageService {
  
  private apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
  private url = `${this.apiUrl}/messages`
  /**
   * Modifica o status das mensagens de não lidas para lidas
   * @param statusMessages mensagens que serão modificadas o seu status
   * @param user usuário que leu as mensagens
   * @returns array de statusMessage apenas das mensagens modificadas
   */
  async readMessages(statusMessages: IStatusMessage[], user: User ) {
    const result = await axios.put(`${this.url}/readMessage`, {statusMessages, user}).catch(this.handleError) as IAxiosResponse<IMessageResponse>
    return result.data
  }

  async getAllByChatId(chatId: string) {
    const result = await axios.get(`${this.url}/all/${chatId}`).catch(this.handleError) as IAxiosResponse<IMessageArrayResponse>
    return result.data
  }
  async getSomeByChatId(chatId: string, skip: number, take: number) {
    const result = await axios.get(`${this.url}/some/${chatId}/${skip}/${take}`).catch(this.handleError) as IAxiosResponse<IMessageArrayResponse>
    return result.data
  }

  protected handleError(error: any) {
    console.log(error)
    return { data: { resp: "AxiosError" } } as { data: { resp: MessageResponse } }
  }
}