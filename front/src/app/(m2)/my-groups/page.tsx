"use client"
import Aside from "@/components/Aside"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@radix-ui/react-label"

const Chat = () => {
  return (
    <main className="flex w-screen h-screen">
      <Aside page="myGroups"></Aside>
      <div className="flex justify-center w-full mt-[6rem]">
        <Card className="px-4 py-1 max-w-[60rem] w-full h-fit">

          <div className="flex gap-7 h-full  w-full">

            <div className="flex flex-col gap-2 w-full max-w-[20rem]">
              <div className="px-4 pt-6">
                <h1 className="text-lg font-semibold">Seus Grupos</h1>
              </div>
              <Separator />
              <div className="flex max-w-[40rem] w-full flex-col gap-1">
                <div className="flex justify-between px-4 py-2 hover:bg-slate-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Avatar className="">
                      <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                        <AvatarFallback>GP</AvatarFallback>
                      </div>
                    </Avatar>
                    <div>
                      <p className="font-medium">Grupo Tops</p>
                      <p className="text-sm">{"<Líder>"}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Avatar className="">
                      <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                        <AvatarFallback className="">GP</AvatarFallback>
                      </div>
                    </Avatar>
                    <div>
                      <p className="font-medium">Grupo Tops</p>
                      <p className="text-sm">{"<Admin>"}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4 py-2 hover:bg-slate-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Avatar className="">
                      <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                        <AvatarFallback className="">GG</AvatarFallback>
                      </div>
                    </Avatar>
                    <div>
                      <p className="font-medium">Grupo Tops</p>
                      <p className="text-sm">{"<Usuário>"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 w-[1px]"></div>

            <div className="flex flex-col items-center my-6 w-full">
              <div className="flex flex-col items-center space-y-3 max-w-[25rem] w-full">
                <div className="flex items-center gap-6 ">
                  <div className="flex items-center gap-2">
                    <Avatar className="flex items-center  w-16 h-16">
                      <div className="flex items-center justify-center w-full h-full rounded-full">
                        <AvatarFallback className="bg-slate-300 text-2xl">GP</AvatarFallback>
                      </div>
                    </Avatar>
                    <div className="">
                      <p className="text-xl font-medium">Grupo Tops</p>
                      <p>grupo de estudo e jogo</p>
                    </div>
                  </div>
                  <div>
                    <Button size={"sm"}>Ir para o chat</Button>
                  </div>
                </div>
                <div className="space-y-8 w-full">
                  <div className="space-y-2">
                    <Label className="font-semibold">Participantes (2 participantes)</Label>
                    <div className="space-y-3">
                      <Card className="border-secondary">
                        <div className="flex items-center justify-between px-4 py-1">
                          <div className="flex gap-3">
                            <Avatar className="flex items-center">
                              <div className="flex items-center justify-center w-9 h-9 rounded-full">
                                <AvatarFallback className="bg-slate-300">G</AvatarFallback>
                              </div>
                            </Avatar>
                            <div className="flex flex-col">
                              <p className="font-medium">Guilherme Mota</p>
                              <p className="text-sm">guimota22@gmail.com</p>
                            </div>
                          </div>
                          <Badge>
                            Líder
                          </Badge>
                        </div>
                      </Card>
                      <Card>
                        <div className="flex items-center justify-between px-4 py-1">
                          <div className="flex gap-3">
                            <Avatar className="flex items-center">
                              <div className="flex items-center justify-center w-9 h-9 rounded-full">
                                <AvatarFallback className="bg-slate-300">P</AvatarFallback>
                              </div>
                            </Avatar>
                            <div className="flex flex-col">
                              <p className="font-medium">Paulo Cesar</p>
                              <p className="text-sm">paulo@gmail.com</p>
                            </div>
                          </div>
                          <Badge variant={"outline"}>Usuário</Badge>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div className="flex justify-center w-full">
                    <div className="flex justify-between max-w-[20rem] w-full">
                      <Button variant={"destructive"}>Excluir Grupo</Button>
                      <Button>Editar Grupo</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

    </main>
  )
}
export default Chat