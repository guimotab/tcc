import { prismaPg } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import { User } from "@prisma/client";

interface reqParams {
  id: string,
}
interface requestPut {
  user: User ,
  optionsChoose: string[],
}

export async function GET(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id } = params

  try {
    const activity = await prismaPg.votingActivity.findUnique({ where: { id }, include: { userVote: true } })
    if (!activity) {
      return NextResponse.json({ resp: "ActivityNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: activity, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}

// export async function PUT(req: Request,
//   { params }: { params: reqParams },
//   res: NextApiResponse) {
//   const { id: votingActivityId } = params

//   const { user, optionsChoose } = await req.json() as requestPut

//   try {
//     const activity = await prismaPg.votingActivity.findUnique({
//       where: {
//         id: votingActivityId
//       },
//       include: {
//         userVote: {
//           where: {
//             votingActivityId,
//             userId: user.id
//           }
//         }
//       }
//     })

//     if (!activity) {
//       return NextResponse.json({ resp: "ActivityNotFound", status: 400 } as IApiResponse)
//     }



//     return NextResponse.json({ resp: "Success", data: activity, status: 200 } as IApiResponse)
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
//   }
// }

export async function DELETE(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id } = params

  try {
    const activity = await prismaPg.votingActivity.delete({ where: { id } })
    if (!activity) {
      return NextResponse.json({ resp: "ActivityNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: activity, status: 200 } as IApiResponse)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}
