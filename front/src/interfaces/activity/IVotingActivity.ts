import IUserVote from "./IUserVote"

export interface IVotingActivity extends IVotingActivityWithoutDefaults {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface IVotingActivityWithoutDefaults {
  title: string
  voteOptions: string[]
  canMultipleVote: boolean
  groupId: string
  endOfVoting: Date
  startOfVoting: Date
  rolesParticipating: string[]
  userVote?: IUserVote[]
}

