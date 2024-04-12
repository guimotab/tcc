import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IUser from "@/interfaces/IUser"
import HashUtils from "@/utils/HashUtils"
import axios from "axios"

interface IAuthResponse {
  token: string,
  refresh: string,
  user: IUser
}

export default class AuthService {

  private url = "http://localhost:4000/auth"

  async sign(name: string, email: string, hashPassword: HashUtils) {
    const password = await hashPassword.generateSalt()
    const result = await axios.post(`${this.url}`, { name, email, password }).catch(e => ({ data: { resp: "AxiosError" } }))
    return result.data as IAxiosResponse<IAuthResponse>
  }

  async login(email: string, password: string) {
    const result = await axios.get(`${this.url}/${email}/${password}`).catch(e => ({ data: { resp: "AxiosError" } }))
    return result.data as IAxiosResponse<IAuthResponse>
  }
}