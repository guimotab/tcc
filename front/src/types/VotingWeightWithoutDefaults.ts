import { VotingWeight } from "@prisma/client";

type VotingWeightWithoutDefaults = Omit<VotingWeight, "id" | "voteActivityId">

export default VotingWeightWithoutDefaults