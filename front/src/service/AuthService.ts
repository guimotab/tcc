import IAxiosResponse from "@/interfaces/IAxiosResponse"
import { User } from "@prisma/client"
import HashUtils from "@/utils/HashUtils"
import axios from "axios"
import env from "dotenv"

env.config()
export default class AuthService {

  private apiUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
  private url = `${this.apiUrl}/api/user/auth`

  async signUp(name: string, email: string, hashPassword: HashUtils) {
    const password = await hashPassword.generateSalt()
    const result = await axios.post(`${this.url}/`, { name, email, password }).catch(this.handleError)
    return result.data as IAxiosResponse<User >
  }

  async login(email: string, password: string) {
    const result = await axios.get(`${this.url}/${email}/${password}`).catch(this.handleError)
    return result.data as IAxiosResponse<User >
  }
 
  private handleError(error: any) {
    console.log(error)
    return { data: { resp: "AxiosError" } }
  }
}