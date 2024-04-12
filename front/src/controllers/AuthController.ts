import AuthService from "@/service/AuthService";
import HashUtils from "@/utils/HashUtils";

export default abstract class AuthController {
  private static authService = new AuthService()

  static async sign(name: string, email: string, password: string) {
    const saltPassord = new HashUtils(password)
    const resp = await this.authService.sign(name, email, saltPassord)
    return resp
  }

  static async login(email: string, password: string) {
    const resp = await this.authService.login(email, password)
    return resp
  }
}