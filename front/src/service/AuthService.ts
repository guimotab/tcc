import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import HashUtils from "@/utils/HashUtils"
import axios from "axios"
import env from "dotenv"

export interface IAuthResponse {
  token: string,
  refresh: string,
  user: IUser
}

env.config()
export default class AuthService {

  private urlBack = process.env.URL_BACKEND || "http://localhost:4000"

  private url = `${this.urlBack}/auth`

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