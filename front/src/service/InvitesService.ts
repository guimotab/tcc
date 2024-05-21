import HttpService from "./HttpService"
import IInvites from "@/interfaces/IInvites"
import { MessageResponse } from "@/types/MessageResponse"

export interface IInvitesResponse {
  resp: MessageResponse
  data: IInvites
}

export default class InvitesService extends HttpService<IInvites, IInvitesResponse> {

  constructor() {
    super("invite")
  }
}