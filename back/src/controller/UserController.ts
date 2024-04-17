import { Request, Response } from 'express';
import prismaPg from "..";
import { messageResponse } from '../types/messageResponse';
import IUser from '../interface/IUser';

interface UserResponse {
  resp: messageResponse
  data?: {
    user: IUser
  }
}

export default abstract class UserController {
  static async get(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await prismaPg.user.findUnique({ where: { id } })

      if (!user) {
        return res.json({ resp: "GroupNotFound" } as UserResponse)
      }

      return res.status(200).json({ resp: "Success", data: { user } } as UserResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

}