import IGroup from "@/interfaces/IGroup";
import IUser from "@/interfaces/IUser";
import IUserOnGroup from "@/interfaces/IUserOnGroup";
import IUserVote from "@/interfaces/activity/IUserVote";
import { IVotingActivity, IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity";
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight";
import ActivityService, { IActivityResponse } from "@/service/ActivityService";

export default abstract class ActivityController {

  private static _activityService = new ActivityService();

  static async createNewVote(voting: IVotingActivityWithoutDefaults & { weights: IVotingWeightWithoutDefaults[] }) {
    const { weights, ...activity } = voting
    return await this._activityService.newVote({ activity, weights }) as IActivityResponse<IVotingActivity>
  }

  static async submitVote(user: IUser, optionsChoose: string[], activityVoteId: string) {
    return await this._activityService.submitVote(user.id, optionsChoose, activityVoteId) as IActivityResponse<IVotingActivity>
  }

  static async getVote(idVote: string) {
    return await this._activityService.getVote(idVote) as IActivityResponse<IVotingActivity>
  }

  static async deleteVote(idVote: string) {
    return await this._activityService.deleteVote(idVote) as IActivityResponse<IVotingActivity>
  }

  static async getAllVoteByGroupId(idVote: string) {
    return await this._activityService.getAllVoteByGroupId(idVote) as IActivityResponse<(IVotingActivity & { userVote: IUserVote[] })[]>
  }

  static async getAllUsersVotesByVotingId(votingId: string) {
    return await this._activityService.getAllUsersVotesByVotingId(votingId) as IActivityResponse<(IUserVote & { user: IUser & { groups: (IGroup & IUserOnGroup)[] } })[]>
  }
}