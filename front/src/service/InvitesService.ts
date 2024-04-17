import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import IInvites from "@/interfaces/IInvites"
import { messageResponse } from "@/types/messageResponse"

export interface IInvitesResponse {
  resp: messageResponse
  data: {
    invites: IInvites
  }
}

export default class InvitesService extends HttpService<IInvites, IInvitesResponse> {

  constructor() {
    super("invites")
  }
}