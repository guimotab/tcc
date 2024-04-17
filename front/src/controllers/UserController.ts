import UserService, { IUserResponse } from "@/service/UserService";
import IUser from "@/interfaces/IUser";

export default class UserController {

  private static _userService = new UserService()

  static async get(id: string) {
    return await this._userService.get(id) as IUserResponse
  }
  static async post(data: IUser) {
    return await this._userService.post(data) as IUserResponse
  }
  static async put(id: string, data: IUser) {
    return await this._userService.put(id, data) as IUserResponse
  }
  static async delete(id: string) {
    return await this._userService.delete(id) as IUserResponse
  }
}