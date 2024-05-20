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
    const invite = await prismaPg.invites.findUnique({ where: { id } })

    if (!invite) {
      return NextResponse.json({ resp: "InvalidInvite", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: invite, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}
