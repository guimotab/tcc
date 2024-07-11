import UserService, { IUserResponse } from "@/service/UserService";
import IUser from "@/interfaces/IUser";
import IUserOnGroup from "@/interfaces/IUserOnGroup";

export default class UserController {

  private static _userService = new UserService()

  static async getUserOnGroup(userId: string, groupId: string) {
    return await this._userService.getUserOnGroup(userId, groupId) as IUserResponse<IUserOnGroup>
  }
  static async getAllByGroupId(groupId: string) {
    return await this._userService.getAllByGroupId(groupId) as IUserResponse<({ role: string } & IUser)[]>
  }
  static async get(id: string) {
    return await this._userService.get(id) as IUserResponse<IUser>
  }
  static async post(data: IUser) {
    return await this._userService.post(data) as IUserResponse<IUser>
  }
  static async put(id: string, data: IUser) {
    return await this._userService.put(id, data) as IUserResponse<IUser>
  }
  static async delete(id: string) {
    return await this._userService.delete(id) as IUserResponse<IUser>
  }
}