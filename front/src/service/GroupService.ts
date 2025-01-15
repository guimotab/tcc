import IAxiosResponse from "@/interfaces/IAxiosResponse"
import { Group } from "@prisma/client"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import Invites from "@/interfaces/Invites"
import { User } from "@prisma/client"
import { UserOnGroup } from "@prisma/client"

import defaultRoles from "@/types/defaultRoles"

export interface IGroupResponse {
  resp: MessageResponse
  data?: Group
}

export interface IGroupArrayResponse {
  resp: MessageResponse
  data?: {
    groups: Group[]
    users: User []
    userOnGroups: UserOnGroup[]
  }
}

export default class GroupService extends HttpService<Group, IGroupResponse> {

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
  async acceptedNewParticipant(currentUser: User , invite: Invites) {
    const result = await axios.put(`${this.url}/`, { invite, participant: currentUser }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async deleteParticipant(groupId: string, userId: string) {
    const result = await axios.delete(`${this.url}/${groupId}/user/${userId}`).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async editUser(groupId: string, newUserEdited: { role: defaultRoles; } & User ) {
    const result = await axios.put(`${this.url}/${groupId}/user/${newUserEdited.id}`, { newUserEdited }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async addNewParticipant(participants: { email: string, role: string }[], user: User  & { role: defaultRoles }, group: Group) {
    const result = await axios.post(`${this.url}/${group.id}/user`, { user, participants, group }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }
  async teste(group: Group) {
    const result = await axios.put(`${this.url}/${group.id}/`, { group }).catch(this.handleError) as IAxiosResponse<IGroupResponse>
    return result.data
  }

}