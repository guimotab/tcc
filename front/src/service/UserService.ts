import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import axios from "axios"
import HttpService from "./HttpService"
import IUserOnGroup from "@/interfaces/IUserOnGroup"

export interface IUserResponse<T> {
  resp: string
  data: T
}

export default class UserService extends HttpService<IUser, IUserResponse<IUser>> {

  constructor() {
    super("user")
  }

  async getUserOnGroup(userId: string, groupId: string) {
    const result = await axios.get(`${this.url}/${userId}/getRole/${groupId}`).catch(this.handleError) as IAxiosResponse<IUserResponse<IUserOnGroup>>
    return result.data
  }
  async getAllByGroupId(groupId: string) {
    const result = await axios.get(`${this.url}/all/group/${groupId}`).catch(this.handleError) as IAxiosResponse<IUserResponse<({ role: string } & IUser)[]>>
    return result.data
  }
}