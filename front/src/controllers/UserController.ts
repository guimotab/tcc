import UserService from "@/service/UserService";

export default abstract class UserController {
  private static userService = new UserService()

  static async getUserById(userId: string) {
    const resp = await this.userService.getByUserId(userId)
    return resp.data
  }

}