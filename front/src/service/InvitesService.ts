import HttpService from "./HttpService"
import Invites from "@/interfaces/Invites"
import { MessageResponse } from "@/types/MessageResponse"

export interface IInvitesResponse {
  resp: MessageResponse
  data: Invites
}

export default class InvitesService extends HttpService<Invites, IInvitesResponse> {

  constructor() {
    super("invite")
  }
}