import IUser from "@/interfaces/IUser";
import IUserVote from "@/interfaces/activity/IUserVote";
import { IVotingActivity, IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity";
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight";
import ActivityService, { IActivityResponse } from "@/service/ActivityService";

export default abstract class ActivityController {

  private static _activityService = new ActivityService();

  static async createNewVote(voting: IVotingActivityWithoutDefaults & { weights: IVotingWeightWithoutDefaults[] }) {
    const { weights, ...activity } = voting
    return await this._activityService.postVote({ activity, weights }) as IActivityResponse<IVotingActivity>
  }

  static async getVote(idVote: string) {
    return await this._activityService.getVote(idVote) as IActivityResponse<IVotingActivity>
  }

  static async getAllVoteByGroupId(idVote: string) {
    return await this._activityService.getAllVoteByGroupId(idVote) as IActivityResponse<(IVotingActivity & { userVote: IUserVote[] })[]>
  }

  static async getAllUsersVotesByVotingId(votingId: string) {
    return await this._activityService.getAllUsersVotesByVotingId(votingId) as IActivityResponse<(IUserVote & { user: IUser })[]>
  }
}