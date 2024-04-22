import { io } from "..";
import ChatController from "../controller/ChatController";
import IGroup from "../interface/IGroup";
import IUser from "../interface/IUser";

interface ISendedMessage {
  content: string,
  sender: IUser,
  chatId: string
}
 
function chatRoutes() {
 
  io.of("/chat").on("connection", socket => {

    //possivelmente, podemos pegar todas as mensagens por rota, sem precisar passar por aqui
    socket.on("join-chat", async (groups: IGroup[], callback: (param: any) => void) => {
      groups.forEach(async chatId => {
        socket.join(chatId.id)
        // const respMessages = await ChatController.getAllMessages(chatId)
        callback("")
      }
      ) 
    })

    //acredito que vá travar o envio de mensagens com o await para salvar msg no banco
    socket.on('message', async ({ content, sender, chatId }: ISendedMessage) => {

      const respMessages = await ChatController.sendMessage({ content, sender, chatId })
      const message = { ...respMessages.data!.message }
      socket.to(chatId).emit("message", { message, sender, chatId })


      // socket.emit(convertToEmit(respMessages))
    });

    socket.on('disconnect', (msg) => {
      // console.log('user disconnected');
    });
  })
}

export default chatRoutes