"use client"
import { Separator } from "@/components/ui/separator"
import { useContext } from "react"
import { DataContext } from "../../page"
import Group from "./Group"

interface GroupsProps {
}

const Groups = ({ }: GroupsProps) => {
  const { groups } = useContext(DataContext)

  return groups && (
    <div className="flex min-w-[16rem] max-w-[25rem] w-full shadow-sm">
      <div className="  w-full">

        <div className="px-4 py-6">
          <h1 className="font-semibold">Meus Grupos</h1>
        </div>

        <Separator className="bg-slate-100" />

        <div className="flex flex-col ">
          {groups.map((group, index) =>
            <div key={group.id}>
              <Group group={group} />
              {groups.length - 1 !== index && <Separator className="bg-slate-100" />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Groups