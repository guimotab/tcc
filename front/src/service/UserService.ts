import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import axios from "axios"
import HttpService from "./HttpService"
import IUserOnGroup from "@/interfaces/IUserOnGroup"

export interface IUserResponse {
  resp: string
  data: {
    user: IUser
  }
}

export interface IUserArrayResponse<T> {
  resp: string
  data: T
}

export default class UserService extends HttpService<IUser, IUserResponse> {

  constructor() {
    super("user")
  }

  async getAllByGroupId(groupId: string) {
    const result = await axios.get(`${this.url}/all/group/${groupId}`).catch(this.handleError) as IAxiosResponse<IUserArrayResponse<({ role: string } & IUser)[]>>
    return result.data
  }
}