import IEmail from "@/interfaces/IEmail";
import EmailService, { IEmailResponse } from "@/service/EmailService";

export default abstract class EmailController {

  private static _emailService = new EmailService();

  static async get(id: string) {
    return await this._emailService.get(id) as IEmailResponse
  }
  static async create(data: IEmail) {
    return await this._emailService.post(data) as IEmailResponse
  }
  static async put(id: string, data: IEmail) {
    return await this._emailService.put(id, data) as IEmailResponse
  }
  static async delete(id: string) {
    return await this._emailService.delete(id) as IEmailResponse
  }

}