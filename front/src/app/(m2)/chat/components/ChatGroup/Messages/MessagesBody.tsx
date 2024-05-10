import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface MessagesBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const MessagesBody = ({ children, className, ...rest }: MessagesBodyProps) => {
  return (
    <div className={cn("flex flex-col h-full gap-1", className)} {...rest}>
      {children}
    </div>
  )
}

export default MessagesBody