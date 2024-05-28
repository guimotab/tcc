import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IGroup from "@/interfaces/IGroup"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import IVotingActivity from "@/interfaces/activity/IVotingActivity"
import IVotingWeight from "@/interfaces/activity/IVotingWeight"

export interface IActivityResponse {
  resp: MessageResponse
  data?: any
}

export interface IParamVotePost {
  weights: Omit<IVotingWeight, "id">[]
  activity: Omit<IVotingActivity, "id" | "createdAt" | "updatedAt">
}

export default class ActivityService extends HttpService<IGroup, IActivityResponse> {

  constructor() {
    super("activity")
  }

  async postVote({ weights, activity }: IParamVotePost) {
    const result = await axios.post(`${this.url}/vote`, { weights, activity }).catch(this.handleError) as IAxiosResponse<IActivityResponse>
    return result.data
  }

  async getVote(id: string) {
    const result = await axios.get(`${this.url}/vote/${id}`).catch(this.handleError) as IAxiosResponse<IActivityResponse>
    return result.data
  }
}