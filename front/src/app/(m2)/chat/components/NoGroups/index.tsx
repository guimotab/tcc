"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MdGroupOff } from "react-icons/md";

const NoGroups = () => {

  return (
    <div className="flex flex-col w-full  h-full items-center justify-center">
      <Card className="flex flex-col items-center px-5 py-3">
        <MdGroupOff className="text-2xl"/>
        <Label className="text-xl">Você não está em nenhum grupo no momento!</Label>

        <Button>Criar grupo</Button>
      </Card>
    </div>
  )
}
export default NoGroups