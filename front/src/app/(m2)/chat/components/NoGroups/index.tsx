"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { MdGroupOff } from "react-icons/md";

const NoGroups = () => {

  return (
    <div className="flex flex-col w-full  h-full items-center justify-center">
      <Card className="flex flex-col items-center px-16 py-5 gap-4">
        <div className="flex flex-col items-center">
          <MdGroupOff className="text-3xl" />
          <Label className="text-xl">Você não está em nenhum grupo no momento!</Label>
        </div>
        <Link href={"create-group?step=1"}>
          <Button>Criar grupo</Button>
        </Link>
      </Card>
    </div>
  )
}
export default NoGroups