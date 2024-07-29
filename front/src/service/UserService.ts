import IAxiosResponse from "@/interfaces/IAxiosResponse"
import { User } from "@prisma/client"
import axios from "axios"
import HttpService from "./HttpService"
import { UserOnGroup } from "@prisma/client"


export interface IUserResponse<T> {
  resp: string
  data: T
}

export default class UserService extends HttpService<User , IUserResponse<User >> {

  constructor() {
    super("user")
  }

  async getUserOnGroup(userId: string, groupId: string) {
    const result = await axios.get(`${this.url}/${userId}/getRole/${groupId}`).catch(this.handleError) as IAxiosResponse<IUserResponse<UserOnGroup
>>
    return result.data
  }
  async getAllByGroupId(groupId: string) {
    const result = await axios.get(`${this.url}/all/group/${groupId}`).catch(this.handleError) as IAxiosResponse<IUserResponse<({ role: string } & User )[]>>
    return result.data
  }
}