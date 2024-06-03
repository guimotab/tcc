"use server"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"
import AsideNavigate from "./AsideNavigate"

interface AsideProps {
  page?: "home" | "chat" | "createGroup" | 'myGroups' | 'project'
}

const Aside = async ({ page }: AsideProps) => {
  const session = await getServerSession(nextAuthOptions)
  return session && (
    <div className="flex flex-col min-w-[96px]">
      <div className=" border-r border-slate-200 bg-slate-50 px-5 py-5 md:py-8 h-full fixed">
        <AsideNavigate page={page} session={session} />
      </div>
    </div>
  )
}
export default Aside