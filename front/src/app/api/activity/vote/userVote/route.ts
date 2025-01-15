import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

interface requestPost {
  votingActivityId: string
  userId: string
  votedOption: string[]
}

export async function POST(req: Request, res: NextApiResponse) {

  const { votingActivityId, userId, votedOption } = await req.json() as requestPost

  try {
    const userVote = await prismaPg.userVote.create({
      data: {
        user: {
          connect: {
            id: userId,
          }
        },
        votedOption,
        VotingActivity: {
          connect: {
            id: votingActivityId,
          }
        }
      }
    })

    return NextResponse.json({ resp: "Success", data: userVote, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}