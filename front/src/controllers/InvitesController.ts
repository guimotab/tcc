import IInvites from "@/interfaces/IInvites";
import InvitesService, { IInvitesResponse } from "@/service/InvitesService";

export default class InvitesController {

  private static invitesService = new InvitesService()

  static async verifyInvite(id: string) {
    return await this.invitesService.get(id) as IInvitesResponse
  }

  static async get(id: string) {
    return await this.invitesService.get(id) as IInvitesResponse
  }
  static async post(data: IInvites) {
    return await this.invitesService.post(data) as IInvitesResponse
  }
  static async put(id: string, data: IInvites) {
    return await this.invitesService.put(id, data) as IInvitesResponse
  }
  static async delete(id: string) {
    return await this.invitesService.delete(id) as IInvitesResponse
  }

}