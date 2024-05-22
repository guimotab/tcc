import IGroup from "@/interfaces/IGroup";
import ChatService, { IChatResponse } from "@/service/ChatService";


export default abstract class ChatController {

  private static _chatService = new ChatService();

  static async createChat(group: IGroup) {
    return await this._chatService.createChat(group.id) as IChatResponse
  }

}