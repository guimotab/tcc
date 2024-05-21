import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

interface reqParams {
  id: string
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id } = params 

  try {
    const user = await prismaPg.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ resp: "UserNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: user, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}