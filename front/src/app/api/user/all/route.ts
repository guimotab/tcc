import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

export async function GET(request: Request, res: NextApiResponse) {

  try {
    const users = await prismaPg.user.findMany({})

    if (!users) {
      return NextResponse.json({ resp: "UserNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: users, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}