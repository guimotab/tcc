import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface MessagesHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const MessagesHeader = ({ children, className, ...rest }: MessagesHeaderProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}  {...rest}>
      {children}
    </div>
  )
}

export default MessagesHeader