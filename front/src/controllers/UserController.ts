import UserService, { IUserResponse } from "@/service/UserService";
import { User } from "@prisma/client";
import { UserOnGroup } from "@prisma/client"
import defaultRoles from "@/types/defaultRoles";

export default class UserController {

  private static _userService = new UserService()

  static async getUserOnGroup(userId: string, groupId: string) {
    return await this._userService.getUserOnGroup(userId, groupId) as IUserResponse<UserOnGroup
>
  }
  static async getAllByGroupId(groupId: string) {
    return await this._userService.getAllByGroupId(groupId) as IUserResponse<({ role: defaultRoles } & User )[]>
  }
  static async get(id: string) {
    return await this._userService.get(id) as IUserResponse<User >
  }
  static async post(data: User ) {
    return await this._userService.post(data) as IUserResponse<User >
  }
  static async put(id: string, data: User ) {
    return await this._userService.put(id, data) as IUserResponse<User >
  }
  static async delete(id: string) {
    return await this._userService.delete(id) as IUserResponse<User >
  }
}