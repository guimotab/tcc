import IGroup from "@/interfaces/IGroup";
import IInvites from "@/interfaces/IInvites";
import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import IUser from "@/interfaces/IUser";
import GroupService, { IGroupArrayResponse, IGroupResponse } from "@/service/GroupService";
import defaultRoles from "@/types/defaultRoles";

export default abstract class GroupController {

  private static _groupService = new GroupService();

  static async addNewParticipant(participants: { email: string, role: string }[], user: IUser & { role: defaultRoles }, group: IGroup) {
    return await this._groupService.addNewParticipant(participants, user, group) as IGroupResponse
  }
  static async acceptedNewParticipant(currentUser: IUser, invite: IInvites) {
    return await this._groupService.acceptedNewParticipant(currentUser, invite) as IGroupResponse
  }
  static async getAllByUserId(userId: string) {
    return await this._groupService.getAllByUserId(userId) as IGroupArrayResponse
  }
  static async deleteParticipant(groupId: string, userId: string) {
    return await this._groupService.deleteParticipant(groupId, userId) as IGroupArrayResponse
  }
  static async changeRoleUser(groupId: string, user: { role: defaultRoles; } & IUser, newRole: defaultRoles) {
    const newUserEdited = { ...user, role: newRole } as { role: defaultRoles; } & IUser
    return await this._groupService.editUser(groupId, newUserEdited) as IGroupArrayResponse
  }
  static async get(id: string) {
    return await this._groupService.get(id) as IGroupResponse
  }
  static async createGroup(data: IGroup, user: IUser, participants: IParticipantsGroup[]) {
    const newData = { ...data, user, participants }
    return await this._groupService.post(newData) as IGroupResponse
  }
  static async updateGroupInformations(newData: IGroup) {
    return await this._groupService.teste(newData) as IGroupResponse
  }
  static async delete(id: string) {
    return await this._groupService.delete(id) as IGroupResponse
  }

}