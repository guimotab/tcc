import IUser from "@/interfaces/IUser"
import IApiResponse from "@/interfaces/api/IApiResponse"
import { prismaPg } from "@/lib/prisma"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"
import EmailController from "../email/EmailController"
import ChatService from "@/service/ChatService"

interface reqBodyPost {
  name: string
  description: string,
  user: IUser
  participants: {
    email: string
    role: string
  }[]
}

export async function POST(req: Request, res: NextApiResponse) {

  const { name, description = "", user, participants } = await req.json() as reqBodyPost

  try {
    const group = await prismaPg.group.create({
      data: {
        name,
        description,
        users: {
          create: {
            role: "Líder",
            assignedBy: user.name,
            user: {
              connect: {
                id: user.id
              }
            },
          }
        }
      }
    }) 

    participants.forEach(async participant => {
      if (participant.email !== user.email) {
        const invites = await prismaPg.invites.create({ data: { role: participant.role, group: { connect: { id: group.id } } } })
        EmailController.sendEmail({
          from: { email: user.email, role: "Líder", name: user.name, project: name },
          link: invites.id,
          to: participant
        })
      }
    })

    const respChat = await ChatService.createChat(group.id)
    if (respChat.resp === "ServerError") {
      throw new Error()
    }

    return NextResponse.json({ resp: "Success", data: group, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}


export async function PUT(req: Request, res: NextApiResponse) {

  const { invite, participant } = await req.json()

  try {
    const participantAlreadyExist = await prismaPg.userOnGroup.findUnique({ where: { userId_groupId: { userId: participant.id, groupId: invite.groupId } } })

    if (participantAlreadyExist) {
      return NextResponse.json({ resp: "UserExistOnGroup", status: 400 } as IApiResponse)
    }

    const group = await prismaPg.group.update({
      data: {
        users: {
          create: {
            role: invite.role,
            user: {
              connect: {
                id: participant.id
              }
            },
            assignedBy: participant.name
          }
        }
      },
      where: { id: invite.groupId }
    })

    if (!group) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    await prismaPg.invites.delete({ where: { id: invite.id } })

    return NextResponse.json({ resp: "Success", data: group, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}