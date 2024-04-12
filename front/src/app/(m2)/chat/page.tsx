"use client"
import Aside from "@/app/(m2)/components/Aside"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"
import { IoSendSharp } from "react-icons/io5";

const Chat = () => {
  return (
    <main className="flex w-screen h-screen">
      <Aside page="chat"></Aside>

      <div className="flex w-fit">
        <div className="w-96 bg-slate-50 h-full">
          <div className="px-4 py-6">
            <h1 className="font-semibold">Mensagens</h1>
          </div>
          <Separator />
          <div className="h-max">
            <div className="flex flex-col ">
              <div className="flex justify-between p-4 hover:bg-slate-100">
                <div className="flex items-center gap-2">
                  <Avatar className="">
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                      <AvatarFallback>P</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="">
                    <p className="font-medium text-sm">Grupo Tops</p>
                    <p className="text-sm truncate max-w-36 text-slate-500">Mensagem Enviada mano</p>
                  </div>
                </div>
                <p className="text-xs">5 min atrás</p>
              </div>
              <Separator />
              <div className="flex justify-between p-4 bg-indigo-50 hover:bg-indigo-100">
                <div className="flex items-center gap-2">
                  <Avatar className="">
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                      <AvatarFallback className="">GP</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="">
                    <p className="font-medium text-sm">Grupo Tops</p>
                    <p className="text-sm truncate max-w-36 text-slate-500">Mensagem Enviada mano</p>
                  </div>
                </div>
                <p className="text-xs">5 min atrás</p>
              </div>
              <Separator />
              <div className="flex justify-between p-4 hover:bg-slate-100">
                <div className="flex items-center gap-2">
                  <Avatar className="">
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                      <AvatarFallback className="">G</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="">
                    <p className="font-medium text-sm">Grupo Tops </p>
                    <p className="text-sm truncate max-w-36 text-slate-500">Mensagem Enviada mano</p>
                  </div>
                </div>
                <p className="text-xs">5 min atrás</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">

        <div className="flex items-center px-7 w-full h-20 bg-white gap-3">
          <Avatar>
            <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
              <AvatarFallback>GP</AvatarFallback>
            </div>
          </Avatar>
          <div>
            <Label className="text-lg">Grupo Tops</Label>
            <p className="text-sm text-slate-500">Pedro Augusto, Guilherme Mota, Lucas Felipe</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between h-full bg-slate-100 py-10">
          <ul className="flex flex-col max-w-[80rem] w-full h-full justify-end py-10 gap-6">
            <li className="flex w-full gap-4">
              <Avatar>
                <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                  <AvatarFallback>PA</AvatarFallback>
                </div>
              </Avatar>
              <div className="flex flex-col h-full max-h-[10rem] gap-1">
                <div className="flex gap-4">
                  <p className="font-medium text-gray-700 text-sm">Pedro Augusto</p>
                  <p className="self-end text-xs font-medium text-gray-500">quarta-feira 04:20</p>
                </div>
                <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-2">
                  <p>Testando Layout do Front</p>
                </div>
              </div>
            </li>
            <li className="flex w-full gap-4 justify-end">
              <div className="flex flex-col max-h-[10rem] gap-1">
                <div className="flex gap-2.5 self-end">
                  <p className="self-end text-xs font-medium text-gray-500">Hoje 13:40</p>
                  <p className="text-end font-medium text-gray-700 text-sm">Guilherme Mota</p>
                </div>
                <div className="text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-2">
                  <p className="text-white">Observando a dinamicidade dos chats criados e o css</p>
                </div>
              </div>
              <Avatar>
                <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                  <AvatarFallback>GP</AvatarFallback>
                </div>
              </Avatar>
            </li>
          </ul>
          <div className="flex max-h-[13rem] bg-white rounded-lg border max-w-[80rem] w-full border-slate-300">
            <textarea placeholder="Digite sua mensagem..." cols={30} rows={3} className="h-auto resize-none text-lg w-full outline-none rounded-lg px-3 py-2 overflow-hidden" />
            <IoSendSharp className="text-3xl relative right-2 bottom-2 text-slate-700 hover:text-slate-500 self-end" />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Chat