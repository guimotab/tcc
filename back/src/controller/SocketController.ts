import { Request, Response } from 'express';
import { io } from '..';

export default abstract class SocketController {

  static async start(req: Request, res: Response) {
    io.on("connection", socket => {
      console.log(socket.id);
      return res.json({ teste: socket.id })
    })
  }

  static async login(req: Request, res: Response) {

  }
}