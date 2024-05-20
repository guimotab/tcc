import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'
import IApiResponse from "@/interfaces/api/IApiResponse";

interface reqParams {
  email: string,
  password: string
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { email, password } = params

  try {
    const user = await prismaPg.user.findUnique({ where: { email: email } })
    if (!user) {
      return NextResponse.json({ resp: "IncorrectCredentials", status: 400 } as IApiResponse)
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      return NextResponse.json({ resp: "IncorrectCredentials", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: user, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}