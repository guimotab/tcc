"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"
import { FaGear } from "react-icons/fa6"
import { Button } from "../ui/button"
import { IoChatbubbleEllipses } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { Separator } from "../ui/separator"
interface AsideProps {
  page: "home" | "chat" | "createGroup" | "createMeet" | 'myGroups'
}

const Aside = ({ page }: AsideProps) => {
  const pages = [
    {
      icon: AiFillHome,
      active: page === "home",
      redirect: "/m2/home"
    }, {
      icon: MdGroups,
      active: page === "myGroups",
      redirect: "/m2/my-groups",
    }, {
      icon: MdGroupAdd,
      active: page === "createGroup",
      redirect: "/m2/create-group/?step=1"
    }, {
      icon: IoChatbubbleEllipses,
      active: page === "chat",
      redirect: "/m2/chat"
    }, {
      icon: FaSquarePlus,
      active: page === "createMeet",
      redirect: "/m2/create-meet"
    },
  ]
  return (
    <div className="flex flex-col border-r border-slate-200 bg-slate-50 px-5 py-8 h-full">
      <div className="h-full space-y-9">
        <div className="flex justify-center items-center py-3">
          <Avatar className="">
            <AvatarImage src="" />
            <div className="flex items-center justify-center w-11 h-11 bg-slate-300 rounded-full">
              <AvatarFallback className="">G</AvatarFallback>
            </div>
          </Avatar>
        </div>
        <Separator className="h-[1px]" />
        <div className="flex flex-col gap-2">
          {pages.map((PageIcon, index) =>
            <Link key={index} href={PageIcon.redirect}>
              <Button variant={"ghost"} className={`py-4 h-fit  ${PageIcon.active ? "bg-slate-200 hover:bg-slate-300" : ""}`}>
                {<PageIcon.icon className={`text-2xl text-gray-800`} />}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Button variant={"ghost"} className="py-4 h-fit">
        <FaGear className="text-2xl text-gray-800 self-end" />
      </Button>
      <Link href={"/"}>
        <Button variant={"ghost"} className="py-4 h-fit bg-accent hover:bg-slate-300">
          <LuLogOut className="text-2xl text-gray-800 self-end" />
        </Button>
      </Link>
    </div>
  )
}
export default Aside