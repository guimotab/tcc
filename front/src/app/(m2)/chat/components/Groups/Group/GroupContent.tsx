import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface GroupContentProps extends HTMLAttributes<HTMLDivElement> {
}

const GroupContent = ({ children, className, ...props }: GroupContentProps) => {
  return (
    <div className={cn("flex items-center gap-2 flex-1 max-w-[80%]", className)} {...props}>
      {children}
    </div>
  )
}

export default GroupContent