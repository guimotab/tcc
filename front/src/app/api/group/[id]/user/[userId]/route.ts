import IApiResponse from "@/interfaces/api/IApiResponse"
import IUser from "@/interfaces/IUser"
import { prismaPg } from "@/lib/prisma"
import defaultRoles from "@/types/defaultRoles"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"


interface reqParams {
  id: string
  userId: string
}
interface reqBodyPost {
  newUserEdited: { role: defaultRoles; } & IUser
}

export async function DELETE(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id: groupId, userId } = params

  try {
    await prismaPg.userOnGroup.delete({ where: { userId_groupId: { groupId, userId } } })

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