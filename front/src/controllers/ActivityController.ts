import ActivityService, { IActivityResponse, IParamVotePost } from "@/service/ActivityService";

export default abstract class ActivityController {

  private static _activityService = new ActivityService();

  static async createNewVote({ activity, weights }: IParamVotePost) {
    return await this._activityService.postVote({ activity, weights }) as IActivityResponse
  }

  static async getVote(idVote: string) {
    return await this._activityService.getVote(idVote) as IActivityResponse
  }
}