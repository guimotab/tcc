import IApiResponse from "@/interfaces/api/IApiResponse"
import { User } from "@prisma/client"
import { UserOnGroup } from "@prisma/client"

import { prismaPg } from "@/lib/prisma"
import defaultRoles from "@/types/defaultRoles"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"


interface reqParams {
  id: string
  userId: string
}
interface reqBodyPost {
  newUserEdited: { role: defaultRoles; } & User 
}

export async function DELETE(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id: groupId, userId } = params

  try {
    const user = await prismaPg.userOnGroup.findUnique({ where: { userId_groupId: { groupId, userId } } }) as UserOnGroup

    const qtdUsers = await prismaPg.userOnGroup.count({ where: { groupId } })
    if (qtdUsers === 1) {
      await prismaPg.group.delete({ where: { id: groupId } })
      return NextResponse.json({ resp: "Success", status: 200 } as IApiResponse)
    }
    if (user?.role === "Líder") {
      await prismaPg.userOnGroup.delete({ where: { userId_groupId: { groupId, userId } } })
      const oldestUser = await prismaPg.userOnGroup.findMany({ where: { groupId }, orderBy: { assignedAt: "asc" } })
      await prismaPg.userOnGroup.update({ where: { userId_groupId: { groupId, userId: oldestUser[0].userId } }, data: { ...oldestUser[0], role: "Líder" } })
    } else {
      await prismaPg.userOnGroup.delete({ where: { userId_groupId: { groupId, userId } } })
    }

    return NextResponse.json({ resp: "Success", status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}

export async function PUT(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id: groupId, userId } = params
  const { newUserEdited } = await req.json() as reqBodyPost

  try {
    await prismaPg.userOnGroup.update({ where: { userId_groupId: { groupId, userId } }, data: { role: newUserEdited.role } })

    return NextResponse.json({ resp: "Success", status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}