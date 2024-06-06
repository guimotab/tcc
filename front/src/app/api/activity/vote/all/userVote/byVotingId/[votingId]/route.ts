import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

interface reqParams {
  votingId: string,
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { votingId } = params

  try {
    const userVote = await prismaPg.userVote.findMany({ where: { votingActivityId: votingId }, include: { user: true } })
    if (!userVote) {
      return NextResponse.json({ resp: "UserVotingNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: userVote, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}