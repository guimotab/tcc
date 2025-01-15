import { Group } from "@prisma/client"
import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface GroupRootProps extends HTMLAttributes<HTMLDivElement> {
  currentGroup: Group
  currentSelectedGroup: Group | undefined
  onClick: () => void
}

const GroupRoot = ({ children, currentSelectedGroup, currentGroup, className, onClick, ...props }: GroupRootProps) => {
  return (
    <div
      className={cn(`flex justify-between p-4 ${currentSelectedGroup && currentSelectedGroup.id === currentGroup.id ? "bg-gray-50" : "hover:bg-slate-50"} cursor-pointer `, className)}
      onClick={onClick}
      {...props}>
      {children}
    </div>
  )
}

export default GroupRoot