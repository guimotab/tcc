import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"
import AsideNavigate from "./AsideNavigate"

const Aside = async () => {
  const session = await getServerSession(nextAuthOptions)
  return session && (
    <div className="flex flex-col border-r border-slate-200 bg-slate-50 px-5 py-5 md:py-8 h-full ">
      <AsideNavigate session={session} />
    </div>
  )
}
export default Aside