import { io } from "..";
import ChatController from "../controller/ChatController";
import IUser from "../interface/IUser";

function chatRoutes() {

  io.of("/chat").on("connection", socket => {

    socket.on("load messages", async (chatId: string) => {
      const respMessages = await ChatController.getAllMessages(chatId)
      console.log("🚀 ~ socket.on ~ respMessages:", respMessages) 
      socket.emit("messages loaded", respMessages)
    })

    socket.on('send message', async (content: string, sender: IUser, chatId: string) => {
      const respMessages = await ChatController.sendMessage({ content, sender, chatId })
      // socket.emit(convertToEmit(respMessages))
    });

    socket.on('disconnect', (msg) => {
      console.log('user disconnected');
    });
  })
}

export default chatRoutes