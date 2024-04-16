import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IGroup from "@/interfaces/IGroup"
import axios from "axios"
import HttpService from "./HttpService"
import { messageResponse } from "@/types/messageResponse"

export interface IGroupResponse {
  resp: messageResponse
  data: {
    group: IGroup
  }
}

export default class GroupService extends HttpService<IGroup, IGroupResponse> {

  constructor() {
    super("group")
  }

  async getByUserId(userId: string) {
    const result = await axios.get(`${this.url}/${userId}`).catch(this.handleError)
    return result.data as IAxiosResponse<IGroupResponse>
  }

}