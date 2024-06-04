import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

interface reqParams {
  groupId: string,
}

export async function GET(request: Request,
  { params }: { params: reqParams }, 
  res: NextApiResponse) {
  const { groupId } = params

  try {
    const activities = await prismaPg.votingActivity.findMany({ where: { groupId } })
    if (!activities) {
      return NextResponse.json({ resp: "ActivityNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: activities, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}