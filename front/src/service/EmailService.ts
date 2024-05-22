import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import IEmail from "@/interfaces/IEmail"

export interface IEmailResponse {
  resp: MessageResponse
  data: {
    group: IEmail
  }
}

export default class EmailService extends HttpService<IEmail, IEmailResponse> {

  constructor() {
    super("email")
  }

}