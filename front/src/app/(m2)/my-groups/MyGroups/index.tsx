"use client"
import { Card } from "@/components/ui/card"
import GroupController from "@/controllers/GroupController"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import CurrentGroup from "./CurrentGroup"
import AllGroups from "./AllGroups"
import { IMyGroupsContext, MyGroupsContext } from "./MyGroupsContext"

interface MyGroupsProps {
  session: Session
}

const MyGroups = ({ session }: MyGroupsProps) => {

  const [myGropsContext, setMyGroupsContext] = useState({} as IMyGroupsContext)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const respGroup = await GroupController.getAllByUserId(session.user.id)
    if (respGroup.data) {
      setMyGroupsContext({
        groups: respGroup.data.groups,
        usersOnGroup: respGroup.data.userOnGroups,
        users: [],
        setMyGroupsContext
      })
    }
  }

  return (
    <Card className="px-4 py-1 max-w-[60rem] w-full h-full max-h-[30rem]">

      <div className="flex gap-7 h-full  w-full">
        <MyGroupsContext.Provider value={myGropsContext} >

          <AllGroups />

          <div className="bg-slate-200 w-[1px]"/>

          <CurrentGroup session={session}/>

        </MyGroupsContext.Provider>
      </div>
    </Card>
  )
}
export default MyGroups