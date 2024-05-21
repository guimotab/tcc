import { prismaMongo } from "@/lib/prisma";
import { NextApiResponse } from "next";
import IApiResponse from "@/interfaces/api/IApiResponse";
import ISender from "@/interfaces/Chats/ISender";
import IStatusMessage from "@/interfaces/Chats/IStatusMessage";
import fixId from "@/utils/fixId";
import { NextResponse } from "next/server";

interface reqParams {
  chat: string[]
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const [chatId, skip, take] = params.chat
  const idFixed = fixId(chatId)
  const skipNumber = Number(skip)
  const takeNumber = Number(take)

  try {
    const messages = await prismaMongo.message.findMany({
      where: {
        chatId: idFixed
      },
      skip: skipNumber,
      take: takeNumber,
      orderBy: {
        createdAt: "desc"
      }
    })

    const senders = await Promise.all(messages.map(
      async message => await prismaMongo.sender.findUnique({ where: { messageId: message.id } })
    ).filter(message => message !== undefined)) as ISender[]

    const statusMessages = await Promise.all(messages.map(
      async message => {
        const respStatusMessage = await prismaMongo.statusMessage.findUnique({ where: { messageId: message.id }, include: { readBy: true } })
        if (respStatusMessage && respStatusMessage.readBy.length === 0) {
          const { messageId, readBy } = respStatusMessage
          return { messageId }
        }
        return respStatusMessage
      }
    )) as IStatusMessage[]

    const findMoreMessages = await prismaMongo.message.findMany({ where: { chatId: idFixed }, skip: skipNumber + takeNumber, take: 1 })
    let hasMoreMessagesToLoad = false
    if (findMoreMessages.length !== 0) {
      hasMoreMessagesToLoad = true
    }

    return NextResponse.json({ resp: "Success", data: { messages, senders, statusMessages, hasMoreMessagesToLoad }, status: 200 } as IApiResponse)

  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}