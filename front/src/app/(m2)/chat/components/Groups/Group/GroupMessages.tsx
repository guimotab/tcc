import IGroup from "@/interfaces/IGroup"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface GroupMessagesProps extends HTMLAttributes<HTMLDivElement> {
  group: IGroup
}

const GroupMessages = ({ children, group, className, ...props }: GroupMessagesProps) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      <p className="font-medium text-sm w-full">{group.name}</p>
      {children}
    </div>
  )
}

export default GroupMessages