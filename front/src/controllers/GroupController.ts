import IGroup from "@/interfaces/IGroup";
import IInvites from "@/interfaces/IInvites";
import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import IUser from "@/interfaces/IUser";
import GroupService, { IGroupArrayResponse, IGroupResponse } from "@/service/GroupService";

export default abstract class GroupController {

  private static _groupService = new GroupService();

  static async addNewParticipant(currentUser: IUser, invite: IInvites) {
    return await this._groupService.addNewParticipant(currentUser, invite) as IGroupResponse
  }
  static async getAllByUserId(userId: string) {
    return await this._groupService.getAllByUserId(userId) as IGroupArrayResponse
  }

  static async get(id: string) {
    return await this._groupService.get(id) as IGroupResponse
  }
  static async createGroup(data: IGroup, user: IUser, participants: IParticipantsGroup[]) {
    const newData = { ...data, user, participants }
    return await this._groupService.post(newData) as IGroupResponse
  }
  static async put(id: string, data: IGroup) {
    return await this._groupService.put(id, data) as IGroupResponse
  }
  static async delete(id: string) {
    return await this._groupService.delete(id) as IGroupResponse
  }

}