import { MdGroups } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../page";

const ActionsGroup = () => {
  const { currentGroup } = useContext(DataContext)
  return (
    <div className="flex gap-5 items-center">
      <Link href={`activities/${currentGroup!.id}`}>
        <Button variant={"outline"} className="flex gap-2">
          <Label>Criar Atividade</Label>
          <FaSquarePlus className="text-xl text-slate-600" />
        </Button>
      </Link>
      <Button variant={"outline"} className="flex gap-2">
        <Label>Ver Grupo</Label>
        <MdGroups className="text-2xl text-slate-600" />
      </Button>
    </div>
  )
}

export default ActionsGroup