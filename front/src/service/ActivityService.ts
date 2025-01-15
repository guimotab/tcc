import IAxiosResponse from "@/interfaces/IAxiosResponse"
import { Group } from "@prisma/client"
import axios from "axios"
import HttpService from "./HttpService"
import { MessageResponse } from "@/types/MessageResponse"
import { VotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight"
import { VotingActivity, IVotingActivityWithoutDefaults } from "@/interfaces/activity/VotingActivity"
import IUserVote from "@/interfaces/activity/IUserVote"
import { User } from "@prisma/client"
import { UserOnGroup } from "@prisma/client"


export interface IActivityResponse<T> {
  resp: MessageResponse
  data?: T
}

export interface IParamVotePost {
  weights: VotingWeightWithoutDefaults[]
  activity: IVotingActivityWithoutDefaults
}

export default class ActivityService extends HttpService<Group, IActivityResponse<any>> {

  constructor() {
    super("activity")
  }

  async newVote({ weights, activity }: IParamVotePost) {
    const result = await axios.post(`${this.url}/vote`, { weights, activity }).catch(this.handleError) as IAxiosResponse<IActivityResponse<VotingActivity>>
    return result.data
  }

  async submitVote(userId: string, votedOption: string[], votingActivityId: string) {
    const result = await axios.post(`${this.url}/vote/userVote/`, { userId, votedOption, votingActivityId }).catch(this.handleError) as IAxiosResponse<IActivityResponse<VotingActivity>>
    return result.data
  }

  async getVote(id: string) {
    const result = await axios.get(`${this.url}/vote/${id}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<VotingActivity>>
    return result.data
  }

  async deleteVote(id: string) {
    const result = await axios.delete(`${this.url}/vote/${id}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<VotingActivity>>
    return result.data
  }

  async getAllVoteByGroupId(groupId: string) {
    const result = await axios.get(`${this.url}/vote/all/byGroup/${groupId}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<(VotingActivity & { userVote: IUserVote[] })[]>>
    return result.data
  }

  async getAllUsersVotesByVotingId(votigingId: string) {
    const result = await axios.get(`${this.url}/vote/all/userVote/byVotingId/${votigingId}`).catch(this.handleError) as IAxiosResponse<IActivityResponse<(IUserVote & { user: User  & { groups: (Group & UserOnGroup
)[] } })[]>>
    return result.data
  }
}