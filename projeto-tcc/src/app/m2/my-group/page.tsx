"use client"
import Aside from "@/components/Aside"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Chat = () => {
  return (
    <main className="flex w-screen h-screen">
      <Aside page="createChat"></Aside>
      <div className="flex flex-col items-center w-full py-16">
        <Card className="flex max-w-[50rem] w-full px-8 py-4">
          <div className="flex flex-col gap-3">
            <Button variant={"ghost"} className="flex justify-start">Criar grupo</Button>
            <Button variant={"ghost"} className="flex justify-start">Adicionar pessoas</Button>
            <Button variant={"ghost"} className="flex justify-start">Criar grupo</Button>
            <Button variant={"ghost"} className="flex justify-start">Criar grupo</Button>
          </div>
          <div className="w-full">

          </div>
        </Card>
      </div>
    </main>
  )
}
export default Chat