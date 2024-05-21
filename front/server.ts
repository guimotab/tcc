import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import IGroup from "@/interfaces/IGroup";
import ChatService from "@/service/ChatService";
import IUser from "@/interfaces/IUser";
import IMessage from "@/interfaces/Chats/IMessage";
import ISender from "@/interfaces/Chats/ISender";
import IStatusMessage from "@/interfaces/Chats/IStatusMessage";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("join-chat", (groups: IGroup[]) => {
      const idGroups = groups.map(chatId => chatId.id)
      socket.join(idGroups)
    })

    socket.on('message', async ({ content, sender, chatId }: { content: string, sender: IUser, chatId: string }) => {
      const respMessages = await ChatService.sendMessage({ content, sender, chatId })

      if (respMessages.resp !== "Success") {
        return
      }

      const { message, sender: senderMessage, statusMessage } = { ...respMessages.data! } as {message: IMessage, sender: ISender, statusMessage: IStatusMessage}
      io.of("/chat").to(chatId).emit("message", { message, sender: senderMessage, chatId, statusMessage })

    });

    socket.on('disconnect', (msg) => {
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});