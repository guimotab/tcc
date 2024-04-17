import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import axios from "axios"
import HttpService from "./HttpService"

export interface IUserResponse {
  resp: string
  data: {
    user: IUser
  }
}

export default class UserService extends HttpService<IUser, IUserResponse> {

  constructor() {
    super("user")
  }


}