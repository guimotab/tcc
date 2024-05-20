import { prismaMongo, prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import IStatusMessage from "@/interfaces/Chats/IStatusMessage";
import IUser from "@/interfaces/IUser";

export async function PUT(req: Request, res: NextApiResponse) {

  const { statusMessages, user } = await req.json() as { statusMessages: IStatusMessage[], user: IUser }

  try {
    const newStatusMessage = await Promise.all(statusMessages.map(async message => {

      const findMessage = await prismaMongo.statusMessage.findMany({
        where: {
          readBy: {
            some: {
              statusMessageId: message.messageId,
              userId: user.id
            }
          }
        },
        include: {
          readBy: true
        }
      })

      if (findMessage.length !== 0) {
        //mensagem já lida
        return findMessage[0]
      }

      const newStatusMessage = await prismaMongo.statusMessage.update({
        where: {
          messageId: message.messageId
        },
        data: {
          readBy: {
            create: {
              name: user.name,
              userId: user.id,
            }
          }
        },
        include: { readBy: true }
      })
      return newStatusMessage
    }))

    return NextResponse.json({ resp: "Success", data: newStatusMessage, status: 200 } as IApiResponse)

  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }


}