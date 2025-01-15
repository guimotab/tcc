"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import UserController from "@/controllers/UserController"
import { formAcronym } from "@/utils/formAcronym"
import { useContext } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MyGroupsContext } from "./MyGroupsContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

interface AllGroupsProps {
}

const AllGroups = ({ }: AllGroupsProps) => {
  const { groups, users, setMyGroupsContext } = useContext(MyGroupsContext)
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const router = useRouter();


  async function handleChangeCurrentGroup(newCurrentGroupId: string) {
    setMyGroupsContext(prev => ({ ...prev, users: [], currentGroupId: undefined }))
    changeCurrentGroup(newCurrentGroupId)
  }

  async function changeCurrentGroup(newCurrentGroupId: string) {
    const respUsers = await UserController.getAllByGroupId(newCurrentGroupId)
    if (respUsers.data) {
      const urlParams = new URLSearchParams()
      urlParams.set("group", newCurrentGroupId)
      setMyGroupsContext(prev => ({ ...prev, users: respUsers.data, currentGroupId: newCurrentGroupId }))
      router.push(`${pathname}/?${urlParams.toString()}`)
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full max-w-[20rem]">
      <div className="flex items-center justify-between  px-4 pt-6">
        <h1 className="text-lg font-semibold">Seus Grupos</h1>
        <Link href={"/create-group?step=1"}>
          <Button size="sm">Criar Grupo</Button>
        </Link>
      </div>
      <Separator />
      <div className="flex max-w-[40rem] w-full flex-col gap-1">
        {groups?.map(group =>
          <div key={group.id}
            onClick={() => handleChangeCurrentGroup(group.id)}
            className={`flex justify-between px-4 py-2 ${searchParams.get("group") === group.id ? "bg-slate-100" : "hover:bg-slate-50"} rounded-lg cursor-pointer`}>
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
        {!groups && (
          <div className="flex flex-col gap-3 mt-3">
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-12" />
          </div>
        )}
      </div>
    </div>


  )
}
export default AllGroups