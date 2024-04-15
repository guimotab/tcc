import { Request, Response } from 'express';
import prismaPg from "..";
import { messagesResponse } from '../types/messagesResponse';
import IUser from '../interface/IUser';
import IGroup from '../interface/IGroup';

interface UserResponse {
  resp: messagesResponse
  data?: {
    user: IUser
  }
}

export default abstract class UserController {
  static async get(req: Request, res: Response) {
    const { userId } = req.params

    try {
      const user = await prismaPg.user.findUnique({ where: { id: userId } })

      if (!user) {
        return res.json({ resp: "Grupo não encontrado" } as UserResponse)
      }

      return res.status(200).json({ resp: "Success", data: { user } } as UserResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "Ocorrou um error no servidor!" })
    }
  }

}