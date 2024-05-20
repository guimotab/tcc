import { prismaMongo } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

export async function GET(request: Request, res: NextApiResponse) {

  try {
    const messages = await prismaMongo.message.findMany({})

    if (!messages) {
      return NextResponse.json({ resp: "MessageNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: messages, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}