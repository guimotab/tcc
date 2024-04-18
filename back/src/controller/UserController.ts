import { Request, Response } from 'express';
import { messageResponse } from '../types/messageResponse';
import IUser from '../interface/IUser';
import { prismaPg } from '..';
import IUserOnGroup from '../interface/IUserOnGroup';

interface UserResponse {
  resp: messageResponse
  data?: {
    user: IUser
  }
}

interface UserArrayResponse {
  resp: messageResponse
  data?: {
    users: IUser[]
    userOnGroups: IUserOnGroup[]
  }
}

export default abstract class UserController {
  static async get(req: Request, res: Response) {
    const { id } = req.params

    try {

      const user = await prismaPg.user.findUnique({ where: { id } })
     
      if (!user) {
        return res.json({ resp: "UserNotFound" } as UserResponse)
      }

      return res.status(200).json({ resp: "Success", data: { user } } as UserResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }
  static async getAllbyGroupId(req: Request, res: Response) {
    const { groupId } = req.params

    try {
      const userOnGroups = await prismaPg.userOnGroup.findMany({ where: { groupId } })
      if (!userOnGroups) {
        return res.json({ resp: "GroupNotFound" } as UserArrayResponse)
      }

      const users = await Promise.all(userOnGroups.map(async (group) => {
        const respGroup = await prismaPg.user.findUnique({ where: { id: group.userId } });
        if (respGroup) {
          return respGroup
        }
      }).filter(group => group !== undefined)) as IUser[]
      if (!users) {
        return res.json({ resp: "GroupNotFound" } as UserArrayResponse)
      }

      return res.status(200).json({ resp: "Success", data: { users } } as UserArrayResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

}