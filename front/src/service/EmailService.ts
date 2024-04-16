import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import { messageResponse } from "@/types/messageResponse"
import IEmail from "@/interfaces/IEmail"

export interface IEmailResponse {
  resp: messageResponse
  data: {
    group: IEmail
  }
}

export default class EmailService extends HttpService<IEmail, IEmailResponse> {

  constructor() {
    super("email")
  }

}