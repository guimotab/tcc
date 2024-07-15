import EmailControllerApi from "@/app/api/email/EmailController"
import IApiResponse from "@/interfaces/api/IApiResponse"
import IGroup from "@/interfaces/IGroup"
import IUser from "@/interfaces/IUser"
import { prismaPg } from "@/lib/prisma"
import defaultRoles from "@/types/defaultRoles"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"

interface reqBodyPost {
  participants: {
    email: string
    role: string
  }[]
  user: IUser & { role: defaultRoles }
  group: IGroup
}

interface reqParams {
  id: string
}

export async function POST(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id: groupId } = params
  const { user, participants, group } = await req.json() as reqBodyPost

  try {
    participants.forEach(async participant => {
      if (participant.email !== user.email) {
        const invites = await prismaPg.invites.create({ data: { role: participant.role, group: { connect: { id: groupId } } } })
        EmailControllerApi.sendEmail({
          from: { email: user.email, role: user.role, name: user.name, project: group.name },
          link: invites.id,
          to: participant
        })
      }
    })
    return NextResponse.json({ resp: "Success", status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}