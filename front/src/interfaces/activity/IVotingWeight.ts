export interface IVotingWeight extends IVotingWeightWithoutDefaults {
  id: number
  voteActivityId: string
}

export interface IVotingWeightWithoutDefaults {
  role: string
  weight: number
}