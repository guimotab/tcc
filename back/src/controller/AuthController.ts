import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prismaPg from "..";
import { messagesResponse } from '../types/messagesResponse';
import IUser from '../interface/IUser';
import dot from "dotenv"

interface AuthResponse {
  resp: messagesResponse
  data?: {
    token: string,
    refresh: string
    user: IUser
  }
}
dot.config()
export default abstract class AuthController {
  // static async sign(req: Request, res: Response) {
  //   const { name, email, password } = req.body

  //   const existEmail = await prismaPg.user.findUnique({ where: { email } })
  //   if (existEmail) {
  //     return res.json({ resp: "Esse email já está sendo usado!" } as AuthResponse)
  //   }

  //   try {
  //     const user = await prismaPg.user.create({ data: { name, email, password } })

  //     const secret = process.env.SECRET!
  //     const secretRefresh = process.env.REFRESH!

  //     const token = jwt.sign({ id: user.id, }, secret, { expiresIn: "5m" })
  //     const refresh = jwt.sign({ id: user.id, }, secretRefresh, { expiresIn: "30m" })

  //     return res.status(200).json({ resp: "Success", data: { token, refresh, user } } as AuthResponse)
  //   } catch (err) {
  //     console.log(err);
  //     return res.json({ resp: "Ocorrou um error no servidor!" })
  //   }
  // }
  static async sign(req: Request, res: Response) {
    const { name, email, password } = req.body

    const existEmail = await prismaPg.user.findUnique({ where: { email } })
    if (existEmail) {
      return res.json({ resp: "Esse email já está sendo usado!" } as AuthResponse)
    }

    try {
      const user = await prismaPg.user.create({ data: { name, email, password } })

      const secret = process.env.SECRET!
      const secretRefresh = process.env.REFRESH!

      const token = jwt.sign({ id: user.id, }, secret, { expiresIn: "5m" })
      const refresh = jwt.sign({ id: user.id, }, secretRefresh, { expiresIn: "30m" }) 

      return res.status(200).json({ resp: "Success", data: { token, refresh, user } } as AuthResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "Ocorrou um error no servidor!" })
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await prismaPg.user.findUnique({ where: { email: email } })
    if (!user) {
      return res.json({ resp: "Email ou senha incorretos!" } as AuthResponse)
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      return res.json({ resp: "Email ou senha incorretos!" } as AuthResponse)
    }
    try { 
      const secret = process.env.SECRET!
      const secretRefresh = process.env.REFRESH!

      const token = jwt.sign({ id: user.id, }, secret, { expiresIn: "5m" })
      const refresh = jwt.sign({ id: user.id, }, secretRefresh, { expiresIn: "30m" })
      
      return res.status(200).json({ resp: "Success", data: { token, refresh, user } } as AuthResponse)
    } catch (error) {
      console.log(error);
      return res.json({ resp: "Ocorrou um error no servidor!" } as AuthResponse)
    }
  }
}