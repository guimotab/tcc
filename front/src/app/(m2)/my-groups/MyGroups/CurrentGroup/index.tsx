"use client"

import GroupController from "@/controllers/GroupController"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Activities from "./Activities"
import GroupInformation from "./GroupInformation"
import AsideIcons from "./AsideIcons"
import { GroupInformationContext, IGroupInformationContext } from "./GroupInformationContext"
import { Skeleton } from "@/components/ui/skeleton"

interface CurrentGroupProps {
  session: Session
}

const CurrentGroup = ({ session }: CurrentGroupProps) => {
  const searchParams = useSearchParams()
  const currentGroupId = searchParams.get("group")
  const [currentGroup, setCurrentGroup] = useState<IGroupInformationContext>()
  const [sectionSelected, setSectionSelected] = useState<"task" | "group">("group")

  useEffect(() => {
    if (currentGroupId) {
      load()
    }
  }, [currentGroupId])

  async function load() {
    const [respGroup] = await Promise.all([
      GroupController.get(currentGroupId!),
      new Promise(resolve => setTimeout(resolve, 1000))
    ])
    if (respGroup.data) {
      setCurrentGroup({
        currentGroup: respGroup.data,
        setCurrentGroup
      })
    }
  }

  return (
    <div className="flex justify-center my-6 w-full gap-8">
      {currentGroupId ?
        currentGroup ?
          <GroupInformationContext.Provider value={currentGroup} >
            <AsideIcons sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
            {sectionSelected === "task" && <Activities session={session} />}
            {sectionSelected === "group" && <GroupInformation session={session} />}
          </GroupInformationContext.Provider>
          :
          <div className="flex w-full gap-10">
            <Skeleton className="w-8 h-40" />

            <div className="space-y-10 w-full max-w-[26rem]">
              <div className="flex items-center gap-3  w-full">
                <Skeleton className="w-20 h-16 rounded-full" />
                <div className="flex justify-between items-center w-full gap-10">
                  <div className="flex flex-col gap-3 w-full">
                    <Skeleton className="w-full h-6" />
                    <Skeleton className="w-full h-4" />
                  </div>
                  <Skeleton className="w-12 h-10" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-9 mt-6" />
                <Skeleton className="w-full h-9" />
              </div>
            </div>
          </div>
        : ""
      }

    </div >
  )
}
export default CurrentGroup