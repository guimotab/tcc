import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import IUser from "@/interfaces/IUser";

interface reqParams {
  groupId: string
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { groupId } = params

  try {
    const userOnGroups = await prismaPg.userOnGroup.findMany({ where: { groupId } })
    if (!userOnGroups) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    const users = await Promise.all(userOnGroups.map(async (group) => {
      const respGroup = await prismaPg.user.findUnique({ where: { id: group.userId } });
      if (respGroup) {
        return { role: group.role, ...respGroup } 
      }
    }).filter(group => group !== undefined)) as ({ role: string } & IUser)[]

    return NextResponse.json({ resp: "Success", data: users, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}