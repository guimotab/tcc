import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";

export async function GET(request: Request, res: NextApiResponse) {

  try {
    const groups = await prismaPg.group.findMany({})

    if (!groups) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: groups, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}