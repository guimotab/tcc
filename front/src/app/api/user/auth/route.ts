import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'
import IApiResponse from "@/interfaces/api/IApiResponse";

export async function POST(req: Request, res: NextApiResponse) {

  const { name, email, password } = await req.json()

  try {
    const existEmail = await prismaPg.user.findUnique({ where: { email } })
    if (existEmail) {
      return NextResponse.json({ resp: "EmailAlreadyUsed", status: 400 } as IApiResponse)
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = await prismaPg.user.create({ data: { name, email, password: passwordHash } })

    return NextResponse.json({ resp: "Success", data: user, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}