import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import IGroup from "@/interfaces/IGroup";

interface reqParams {
  userId: string
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { userId } = params

  try {
    const userOnGroups = await prismaPg.userOnGroup.findMany({ where: { userId }, include: { user: true } })
    if (!userOnGroups) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    const groups = await Promise.all(userOnGroups.map(async (group) => {

      const respGroup = await prismaPg.group.findUnique({ where: { id: group.groupId } });
      if (respGroup) {
        return respGroup
      }

    }).filter(group => group !== undefined)) as IGroup[]


    return NextResponse.json({ resp: "Success", data: { groups, userOnGroups }, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}