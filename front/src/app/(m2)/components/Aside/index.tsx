"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"
import { FaGear } from "react-icons/fa6"
import { Button } from "../../../../components/ui/button"
import { IoChatbubbleEllipses } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { Separator } from "../../../../components/ui/separator"
import { FaGithub } from "react-icons/fa6";
import AuthController from "@/controllers/AuthController"
import { redirect, useRouter } from "next/navigation"
import useCurrentUser from "../../../../../states/hooks/useCurrentUser"

interface AsideProps {
  page?: "home" | "chat" | "createGroup"  | 'myGroups' | 'project'
}

const Aside = ({ page }: AsideProps) => {
  const router = useRouter()
  const currentUser = useCurrentUser()

  function signOut() {
    AuthController.logout()
    router.push("/")
  }

  const pages = [
    {
      icon: AiFillHome,
      active: page === "home",
      redirect: "/home"
    },
    {
      icon: MdGroups,
      active: page === "myGroups",
      redirect: "/my-groups"
    },
    {
      icon: IoChatbubbleEllipses,
      active: page === "chat",
      redirect: "/chat"
    }, 
    {
      icon: MdGroupAdd,
      active: page === "createGroup",
      redirect: "/create-group/?step=1"
    },
    {
      icon: FaGithub,
      active: page === "project",
      redirect: "/project"
    },
  ]
  return (
    <div className="flex flex-col border-r border-slate-200 bg-slate-50 px-5 py-5 md:py-8 h-full ">
      <div className="flex flex-col justify-between h-full space-y-4 md:space-y-9">
        <div className="flex flex-col gap-6 justify-center items-center py-3">
          <Avatar className="">
            <AvatarImage src="" />
            <div className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 bg-slate-300 rounded-full">
              <AvatarFallback className="">{currentUser.name.at(0)!.toUpperCase()}</AvatarFallback>
            </div>
          </Avatar>
          <Separator className="h-[1px]" />
        </div>
        <div className="flex flex-col gap-2">
          {pages.map((PageIcon, index) =>
            <Link key={index} href={PageIcon.redirect}>
              <Button variant={"ghost"} className={`p-3 md:p-4 h-fit  ${PageIcon.active ? "bg-slate-200 hover:bg-slate-300" : ""}`}>
                {<PageIcon.icon className={`text-xl md:text-2xl text-gray-800`} />}
              </Button>
            </Link>
          )}
        </div>
        <div className="flex flex-col">
          <Button variant={"ghost"} className="p-3 md:p-4 h-fit">
            <FaGear className="text-xl md:text-2xl text-gray-800 self-end" />
          </Button>
          <Button onClick={signOut} variant={"ghost"} className="p-3 md:p-4 h-fit bg-accent hover:bg-slate-300">
            <LuLogOut className="text-xl md:text-2xl text-gray-800 self-end" />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Aside