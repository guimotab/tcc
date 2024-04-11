import AuthService from "@/service/AuthService";
import HashUtils from "@/utils/HashUtils";

export default abstract class AuthController {
  static _authService = new AuthService()

  static async sign(name: string, email: string, password: string) {
    const saltPassord = new HashUtils(password)
    const resp = await this._authService.sign(name, email, saltPassord)
    return resp
  }
}