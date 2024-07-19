"use client"

import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Activities from "./Activities"
import GroupInformation from "./GroupInformation"
import AsideIcons from "./AsideIcons"
import { GroupInformationContext, IGroupInformationContext } from "./GroupInformationContext"

interface CurrentGroupProps {
  session: Session
}

const CurrentGroup = ({ session }: CurrentGroupProps) => {
  const searchParams = useSearchParams()
  const currentGroupId = searchParams.get("group")
  const [currentGroup, setCurrentGroup] = useState<IGroupInformationContext>()
  const [sectionSelected, setSectionSelected] = useState<"task" | "group">("group")
  console.log("🚀 ~ CurrentGroup ~ currentGroup:", currentGroup)

  useEffect(() => {
    if (currentGroupId) {
      load()
    }
  }, [currentGroupId])

  async function load() {
    const [respGroup] = await Promise.all([
      GroupController.get(currentGroupId!),
    ])
    if (respGroup.data) {
      setCurrentGroup({
        currentGroup: respGroup.data,
        setCurrentGroup
      })
    }
  }

  return currentGroup?.currentGroup && (
    <div className="flex justify-center my-6 w-full gap-8">

      <GroupInformationContext.Provider value={currentGroup}>
        <AsideIcons sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
        {sectionSelected === "task" && <Activities session={session} />}
        {sectionSelected === "group" && <GroupInformation session={session} />}
      </GroupInformationContext.Provider>

    </div>
  )
}
export default CurrentGroup