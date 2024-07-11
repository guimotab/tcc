import IAxiosResponse from "@/interfaces/IAxiosResponse"
import IGroup from "@/interfaces/IGroup"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight"
import { IVotingActivity, IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity"
import IUserVote from "@/interfaces/activity/IUserVote"
import IUser from "@/interfaces/IUser"
import IUserOnGroup from "@/interfaces/IUserOnGroup"

export interface IActivityResponse<T> {
  resp: MessageResponse
  data?: T
}

export interface IParamVotePost {
  weights: IVotingWeightWithoutDefaults[]
  activity: IVotingActivityWithoutDefaults
}

export default class ActivityService extends HttpService<IGroup, IActivityResponse<any>> {

  constructor() {
    super("activity")
  }

  async newVote({ weights, activity }: IParamVotePost) {
    const result = await axios.post(`${this.url}/vote`, { weights, activity }).catch(this.handleError) as IAxiosResponse<IActivityResponse<IVotingActivity>>
    return result.data
  }

  async submitVote(userId: string, votedOption: string[], votingActivityId: string) {
    const result = await axios.post(`${this.url}/vote/userVote/`, { userId, votedOption, votingActivityId }).catch(this.handleError) as IAxiosResponse<IActivityResponse<IVotingActivity>>
    return result.data
  }

  async getVote(id: string) {
    const result = await axios.get(`${this.url}/vote/${id}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<IVotingActivity>>
    return result.data
  }

  async deleteVote(id: string) {
    const result = await axios.delete(`${this.url}/vote/${id}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<IVotingActivity>>
    return result.data
  }

  async getAllVoteByGroupId(groupId: string) {
    const result = await axios.get(`${this.url}/vote/all/byGroup/${groupId}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<(IVotingActivity & { userVote: IUserVote[] })[]>>
    return result.data
  }

  async getAllUsersVotesByVotingId(votigingId: string) {
    const result = await axios.get(`${this.url}/vote/all/userVote/byVotingId/${votigingId}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<(IUserVote & { user: IUser & { groups: (IGroup & IUserOnGroup)[] } })[]>>
    return result.data
  }
}