import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import IVotingActivity from "@/interfaces/activity/IVotingActivity";
import IVotingWeight from "@/interfaces/activity/IVotingWeight";

interface requestPost {
  weights: Omit<IVotingWeight, "id">[]
  activity: Omit<IVotingActivity, "id" | "createdAt" | "updatedAt">
}

export async function POST(req: Request, res: NextApiResponse) {

  const { weights, activity } = await req.json() as requestPost

  try {
    const votingActivity = await prismaPg.votingActivity.create({ data: activity })
    const votingWeight = await Promise.all(
      [weights.forEach(weight => {
        const { voteActivityId, ...votingWeight } = weight
        prismaPg.votingWeight.create({ data: { ...votingWeight, voteActivity: { connect: { id: votingActivity.id } } } })
      })]
    )

    return NextResponse.json({ resp: "Success", data: { votingActivity, votingWeight }, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}