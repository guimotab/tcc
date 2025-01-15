import IApiResponse from "@/interfaces/api/IApiResponse";
import { prismaPg } from "@/lib/prisma";
import { Invites } from "@prisma/client";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  const { groupId, quantity } = await req.json() as { groupId: string, quantity: string }

  try {

    const arrayInvites = [] as Invites[]

    for (let i = 0; i < Number(quantity); i++) {
      // const invites = await prismaPg.invites.create({ data: { group: { connect: { id: groupId } } } })
      // arrayInvites.push(invites)
    }

    return res.status(200).json({ resp: "Success", data: arrayInvites, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return res.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}