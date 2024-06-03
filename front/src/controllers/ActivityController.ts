import { IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity";
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight";
import ActivityService, { IActivityResponse } from "@/service/ActivityService";

export default abstract class ActivityController {

  private static _activityService = new ActivityService();

  static async createNewVote(voting: IVotingActivityWithoutDefaults & { weights: IVotingWeightWithoutDefaults[] }) {
    const { weights, ...activity } = voting
    return await this._activityService.postVote({ activity, weights }) as IActivityResponse
  }

  static async getVote(idVote: string) {
    return await this._activityService.getVote(idVote) as IActivityResponse
  }
}