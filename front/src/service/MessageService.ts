import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import ISender from "@/interfaces/Chats/ISender"

export interface IMessageResponse {
  resp: messageResponse
  data?: {
    messages: IMessage
  }
}

export interface IMessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
    senders: ISender[]
  }
}

export default class MessageService extends HttpService<IMessage, IMessageResponse> {

  constructor() {
    super("messages")
  }

  async getAllByChatId(chatId: string) {
    const result = await axios.get(`${this.url}/all/${chatId}`).catch(this.handleError) as IAxiosResponse<IMessageResponse>
    return result.data
  }
  async getAllByChatIdLimited(chatId: string, skip: number, take: number) {
    const result = await axios.get(`${this.url}/all/${chatId}/${skip}/${take}`).catch(this.handleError) as IAxiosResponse<IMessageArrayResponse>
    return result.data
  }

}