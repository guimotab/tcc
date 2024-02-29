"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"
import { FaGear } from "react-icons/fa6"
import { Button } from "../ui/button"
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiChatNewLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { FaSquarePlus } from "react-icons/fa6";
import { Separator } from "../ui/separator"

interface AsideProps {
  page: "home" | "chat" | "createChat" | "createMeet"
}

const Aside = ({ page }: AsideProps) => {
  const buttons = [
    {
      icon: AiFillHome,
      active: page === "home",
      redirect: "/m2/home"
    }, {
      icon: IoChatbubbleEllipses,
      active: page === "chat",
      redirect: "/m2/chat"
    }, {
      icon: RiChatNewLine,
      active: page === "createChat",
      redirect: "/m2/createChat"
    }, {
      icon: FaSquarePlus,
      active: page === "createMeet",
      redirect: "/m2/createMeet"
    }
  ]
  return (
    <div className="flex flex-col border-r border-slate-200 bg-slate-50 px-5 py-8 h-full">
      <div className="h-full space-y-9">
        <div className="flex justify-center items-center py-3">
          <Avatar className="">
            <AvatarImage src="" />
            <AvatarFallback className="bg-slate-300 py-3 px-3.5 rounded-full">G</AvatarFallback>
          </Avatar>
        </div>
        <Separator className="h-[1px]" />
        <div className="flex flex-col gap-2">
          {buttons.map(ButtonIcon =>
            <Link href={ButtonIcon.redirect}>
              <Button variant={"ghost"} className={`py-4 h-fit  ${ButtonIcon.active ? "bg-slate-200 hover:bg-slate-300" : ""}`}>
                {<ButtonIcon.icon className="text-2xl text-gray-800" />}
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