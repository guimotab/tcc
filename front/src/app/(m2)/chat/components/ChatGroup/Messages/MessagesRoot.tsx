import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface MessagesRoot extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

const MessagesRoot = ({ children, className, ...rest }: MessagesRoot) => {
  return (
    <li className={cn("flex w-full gap-2", className)} {...rest}>
      {children}
    </li>
  )
}

export default MessagesRoot