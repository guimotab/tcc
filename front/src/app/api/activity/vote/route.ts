import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight";
import { IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity";

interface requestPost {
  weights: IVotingWeightWithoutDefaults[]
  activity: IVotingActivityWithoutDefaults
}

export async function POST(req: Request, res: NextApiResponse) {

  const { weights, activity } = await req.json() as requestPost

  try {
    const votingActivity = await prismaPg.votingActivity.create({ data: activity })
    const votingWeight = await Promise.all(
      [weights.forEach(async weight => {
        await prismaPg.votingWeight.create({ data: { ...weight, voteActivity: { connect: { id: votingActivity.id } } } })
      })]
    )

    return NextResponse.json({ resp: "Success", data: { votingActivity, votingWeight }, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}