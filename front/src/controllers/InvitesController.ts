import IAxiosResponse from "@/interfaces/IAxiosResponse";
import IInvites from "@/interfaces/IInvites";
import InvitesService, { IInvitesResponse } from "@/service/InvitesService";

export default class InvitesController {

  private static invitesService = new InvitesService()

  static async get(id: string) {
    return await this.invitesService.get(id) as IAxiosResponse<IInvitesResponse>
  }
  static async post(data: IInvites) {
    return await this.invitesService.post(data) as IAxiosResponse<IInvitesResponse>
  }
  static async put(id: string, data: IInvites) {
    return await this.invitesService.put(id, data) as IAxiosResponse<IInvitesResponse>
  }
  static async delete(id: string) {
    return await this.invitesService.delete(id) as IAxiosResponse<IInvitesResponse>
  }

}