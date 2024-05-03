import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import { responseRecordMessage } from "@/controllers/MessagesController"

export interface IMessageResponse {
  resp: messageResponse
  data?: {
    messages: IMessage
  }
}

export interface IMessageArrayResponse {
  resp: messageResponse
  data?: responseRecordMessage
}

export default class MessageService extends HttpService<IMessage, IMessageResponse> {
  async statusReadMessage(quantity: number) {
    const result = await axios.get(`${this.url}/readMessage/${quantity}}`).catch(this.handleError) as IAxiosResponse<IMessageResponse>
    return result.data
  }

  constructor() {
    super("messages")
  }

  async getAllByChatId(chatId: string) {
    const result = await axios.get(`${this.url}/all/${chatId}`).catch(this.handleError) as IAxiosResponse<IMessageResponse>
    return result.data
  }
  async getSomeByChatId(chatId: string, skip: number, take: number) {
    const result = await axios.get(`${this.url}/some/${chatId}/${skip}/${take}`).catch(this.handleError) as IAxiosResponse<IMessageArrayResponse>
    return result.data
  }

}