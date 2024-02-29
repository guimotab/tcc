"use client"
import Aside from "@/components/Aside"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"

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
                    <div className="flex items-center justify-center w-8 h-8 bg-slate-300 rounded-full">
                      <AvatarFallback>P</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="">
                    <p className="font-medium text-sm">Grupo Tops</p>
                    <p className="text-sm truncate max-w-36">Mensagem Enviada mano</p>
                  </div>
                </div>
                <p className="text-xs">5 min atrás</p>
              </div>
              <Separator />
              <div className="flex justify-between p-4 hover:bg-slate-100">
                <div className="flex items-center gap-2">
                  <Avatar className="">
                    <div className="flex items-center justify-center w-8 h-8 bg-slate-300 rounded-full">
                      <AvatarFallback className="">G</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="">
                    <p className="font-medium text-sm">Grupo Tops</p>
                    <p className="text-sm truncate max-w-36">Mensagem Enviada mano</p>
                  </div>
                </div>
                <p className="text-xs">5 min atrás</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center px-5 w-full h-20 bg-white">
          <Avatar className="">
            <div className="flex items-center justify-center w-8 h-8 bg-slate-300 rounded-full">
              <AvatarFallback>P</AvatarFallback>
            </div>
          </Avatar>
        </div>
        <div className="h-full bg-slate-100">

        </div>
      </div>
    </main>
  )
}
export default Chat