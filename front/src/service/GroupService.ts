import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IGroup from "@/interfaces/IGroup"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import IInvites from "@/interfaces/IInvites"
import IUser from "@/interfaces/IUser"
import IUserOnGroup from "@/interfaces/IUserOnGroup"
import defaultRoles from "@/types/defaultRoles"

export interface IGroupResponse {
  resp: MessageResponse
  data?: IGroup
}

export interface IGroupArrayResponse {
  resp: MessageResponse
  data?: {
    groups: IGroup[]
    users: IUser[]
    userOnGroups: IUserOnGroup[]
  }
}

export default class GroupService extends HttpService<IGroup, IGroupResponse> {

  constructor() {
    super("group")
  }

  async getByUserId(userId: string) {
    const result = await axios.get(`${this.url}/${userId}`).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async getAllByUserId(userId: string) {
    const result = await axios.get(`${this.url}/all/user/${userId}`).catch(this.handleError) as IAxiosResponse<IGroupArrayResponse>
    return result.data
  }
  async acceptedNewParticipant(currentUser: IUser, invite: IInvites) {
    const result = await axios.put(`${this.url}/`, { invite, participant: currentUser }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async deleteParticipant(groupId: string, userId: string) {
    const result = await axios.delete(`${this.url}/${groupId}/user/${userId}`).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async editUser(groupId: string, newUserEdited: { role: defaultRoles; } & IUser) {
    const result = await axios.put(`${this.url}/${groupId}/user/${newUserEdited.id}`, { newUserEdited }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async addNewParticipant(participants: { email: string, role: string }[], user: IUser & { role: defaultRoles }, group: IGroup) {
    const result = await axios.post(`${this.url}/${group.id}/user`, { user, participants, group }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async teste(group: IGroup) {
    const result = await axios.put(`${this.url}/${group.id}/`, { group }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }

}