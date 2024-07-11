"use client"

import { Label } from "@/components/ui/label"
import ActivityController from "@/controllers/ActivityController"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import IUserVote from "@/interfaces/activity/IUserVote"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import { MyGroupsContext } from "@/app/(m2)/my-groups/MyGroupsContext"
import dayjs from "dayjs"
import { Session } from "next-auth"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { FaUserGroup } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import Activities from "./Activities"
import GroupInformation from "./GroupInformation"
import AsideIcons from "./AsideIcons"

interface CurrentGroupProps {
  session: Session
}

const CurrentGroup = ({ session }: CurrentGroupProps) => {
  const searchParams = useSearchParams()
  const currentGroupId = searchParams.get("group")
  const [currentGroup, setCurrentGroup] = useState<IGroup>()
  const [sectionSelected, setSectionSelected] = useState<"task" | "group">("task")

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
      setCurrentGroup(respGroup.data)
    }
  }


  return currentGroup && (
    <div className="flex justify-center my-6 w-full gap-8">

      <AsideIcons sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />

      {sectionSelected === "task" && <Activities session={session} />}
      {sectionSelected === "group" && <GroupInformation session={session} />}

    </div>
  )
}
export default CurrentGroup