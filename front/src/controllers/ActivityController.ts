import { Group, UserVote, VotingActivity } from "@prisma/client";
import { User } from "@prisma/client";
import { UserOnGroup } from "@prisma/client"
import ActivityService, { IActivityResponse } from "@/service/ActivityService";
import VotingActivityWithoutDefaults from "@/types/VotingActivityWithoutDefaults";
import VotingWeightWithoutDefaults from "@/types/VotingWeightWithoutDefaults";

export default abstract class ActivityController {

  private static _activityService = new ActivityService();

  static async createNewVote(voting: VotingActivityWithoutDefaults & { weights: VotingWeightWithoutDefaults[] }) {
    const { weights, ...activity } = voting
    return await this._activityService.newVote({ activity, weights }) as IActivityResponse<VotingActivity>
  }

  static async submitVote(user: User, optionsChoose: string[], activityVoteId: string) {
    return await this._activityService.submitVote(user.id, optionsChoose, activityVoteId) as IActivityResponse<VotingActivity>
  }

  static async getVote(idVote: string) {
    return await this._activityService.getVote(idVote) as IActivityResponse<VotingActivity & { userVote: UserVote[] }>
  }

  static async deleteVote(idVote: string) {
    return await this._activityService.deleteVote(idVote) as IActivityResponse<VotingActivity>
  }

  static async getAllVoteByGroupId(idVote: string) {
    return await this._activityService.getAllVoteByGroupId(idVote) as IActivityResponse<(VotingActivity & { userVote: UserVote[] })[]>
  }

  static async getAllUsersVotesByVotingId(votingId: string) {
    return await this._activityService.getAllUsersVotesByVotingId(votingId) as IActivityResponse<(UserVote & {
      user: User & {
        groups: (Group & UserOnGroup
        )[]
      }
    })[]>
  }
}