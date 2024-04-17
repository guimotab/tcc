import AuthService from "@/service/AuthService";
import HashUtils from "@/utils/HashUtils";
import { deleteCookies, setCookies } from "./CookiesController";
import TokensController from "./TokensController";

export default abstract class AuthController {
  private static authService = new AuthService()

  static async signUp(name: string, email: string, password: string) {
    const saltPassord = new HashUtils(password)
    const resp = await this.authService.signUp(name, email, saltPassord)
    if (resp.data) {
      setCookies(resp.data)
    }
    return resp
  }

  static async login(email: string, password: string) {
    const resp = await this.authService.login(email, password)
    if (resp.data) {
      setCookies(resp.data)
    }
    return resp
  }

  static async logout(){
    deleteCookies()
    TokensController.getToken()
  }
}