"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import UserController from "@/controllers/UserController"
import { MyGroupsContext } from "@/providers/MyGroupsContext"
import { formAcronym } from "@/utils/formAcronym"
import { useContext } from "react"

interface AllGroupsProps {
}

const AllGroups = ({ }: AllGroupsProps) => {
  const { groups, users, currentGroupId, setMyGroupsContext } = useContext(MyGroupsContext)

  async function handleChangeCurrentGroup(newCurrentGroup: string) {
    const respUsers = await UserController.getAllByGroupId(newCurrentGroup)
    if (respUsers.data) {
      setMyGroupsContext(prev => ({ ...prev, users: respUsers.data, currentGroupId: newCurrentGroup }))
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full max-w-[20rem]">
      <div className="px-4 pt-6">
        <h1 className="text-lg font-semibold">Seus Grupos</h1>
      </div>
      <Separator />
      <div className="flex max-w-[40rem] w-full flex-col gap-1">
        {groups?.map(group =>
          <div
            onClick={() => handleChangeCurrentGroup(group.id)}
            className={`flex justify-between px-4 py-2 ${currentGroupId === group.id ? "bg-slate-100" : "hover:bg-slate-50"} rounded-lg cursor-pointer`}>
            <div className="flex items-center gap-2">
              <Avatar className="">
                <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
                  <AvatarFallback className="bg-slate-200">{formAcronym(group.name, 2)}</AvatarFallback>
                </div>
              </Avatar>
              <div>
                <p className="font-medium">{group.name}</p>
                <p className="text-sm">{group.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>


  )
}
export default AllGroups