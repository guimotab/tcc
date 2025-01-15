import { Group } from "@prisma/client";
import { Invites } from "@prisma/client";
import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import { User } from "@prisma/client";
import GroupService, { IGroupArrayResponse, IGroupResponse } from "@/service/GroupService";
import defaultRoles from "@/types/defaultRoles";

export default abstract class GroupController {

  private static _groupService = new GroupService();

  static async addNewParticipant(participants: { email: string, role: string }[], user: User  & { role: defaultRoles }, group: Group) {
    return await this._groupService.addNewParticipant(participants, user, group) as IGroupResponse
  }
  static async acceptedNewParticipant(currentUser: User , invite: Invites) {
    return await this._groupService.acceptedNewParticipant(currentUser, invite) as IGroupResponse
  }
  static async getAllByUserId(userId: string) {
    return await this._groupService.getAllByUserId(userId) as IGroupArrayResponse
  }
  static async deleteParticipant(groupId: string, userId: string) {
    return await this._groupService.deleteParticipant(groupId, userId) as IGroupArrayResponse
  }
  static async changeRoleUser(groupId: string, user: { role: defaultRoles; } & User , newRole: defaultRoles) {
    const newUserEdited = { ...user, role: newRole } as { role: defaultRoles; } & User 
    return await this._groupService.editUser(groupId, newUserEdited) as IGroupArrayResponse
  }
  static async get(id: string) {
    return await this._groupService.get(id) as IGroupResponse
  }
  static async createGroup(data: Group, user: User , participants: IParticipantsGroup[]) {
    const newData = { ...data, user, participants }
    return await this._groupService.post(newData) as IGroupResponse
  }
  static async updateGroupInformations(newData: Group) {
    return await this._groupService.teste(newData) as IGroupResponse
  }
  static async delete(id: string) {
    return await this._groupService.delete(id) as IGroupResponse
  }

}