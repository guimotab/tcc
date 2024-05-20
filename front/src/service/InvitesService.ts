import IAxiosResponse from "@/interfaces/IAxiosResponse"
import axios from "axios"
import HttpService from "./HttpService"
import IInvites from "@/interfaces/IInvites"
import { MessageResponse } from "@/types/MessageResponse"

export interface IInvitesResponse {
  resp: MessageResponse
  data: {
    invites: IInvites
  }
}

export default class InvitesService extends HttpService<IInvites, IInvitesResponse> {

  constructor() {
    super("invites")
  }
}