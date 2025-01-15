import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

interface reqParams {
  id: string
  groupId: string
}

export async function GET(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id: userId, groupId } = params

  try {
    const userOnGroup = await prismaPg.userOnGroup.findUnique({ where: { userId_groupId: { userId, groupId } } })

    if (!userOnGroup) {
      return NextResponse.json({ resp: "UserNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: userOnGroup, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}