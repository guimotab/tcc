import IUser from "@/interfaces/IUser"
import IApiResponse from "@/interfaces/api/IApiResponse"
import { prismaPg } from "@/lib/prisma"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"

interface reqParams {
  id: string
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id } = params

  try {
    const group = await prismaPg.group.findUnique({ where: { id } })

    if (!group) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: group, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}


export async function DELETE(req: Request, 
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id } = params

  try {
    await prismaPg.group.delete({ where: { id } })

    return res.status(200).json({ resp: "Success", status: 200 } as IApiResponse) 
  } catch (err) {
    console.log(err);
    return res.json({ resp: "ServerError", status: 500 })
  }
}