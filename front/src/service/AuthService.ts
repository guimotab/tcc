import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import HashUtils from "@/utils/HashUtils"
import axios from "axios"

export interface IAuthResponse {
  token: string,
  refresh: string,
  user: IUser
}

export default class AuthService {

  private url = "http://localhost:4000/auth"

  async signUp(name: string, email: string, hashPassword: HashUtils) {
    const password = await hashPassword.generateSalt()
    const result = await axios.post(`${this.url}`, { name, email, password }).catch(this.handleError)
    return result.data as IAxiosResponse<IAuthResponse>
  }

  async login(email: string, password: string) {
    const result = await axios.post(`${this.url}/login/`, { email, password }).catch(this.handleError)
    return result.data as IAxiosResponse<IAuthResponse>
  }

  private handleError(error: any) {
    console.log(error)
    return { data: { resp: "AxiosError" } }
  }
}