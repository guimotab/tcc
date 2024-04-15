import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import axios from "axios"

export interface IUserResponse {
  resp: string
  data: {
    user: IUser
  }
}

export default class UserService {

  private url = "http://localhost:4000/user"

  async getByUserId(userId: string) {
    const result = await axios.get(`${this.url}/${userId}`).catch(this.handleError)
    return result.data as IAxiosResponse<IUserResponse>
  }

  private handleError(error: any) {
    console.log(error)
    return { data: { resp: "AxiosError" } }
  }
}