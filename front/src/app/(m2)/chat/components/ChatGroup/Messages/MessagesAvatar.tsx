import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface MessagesAvatarProps extends HTMLAttributes<HTMLDivElement> {
  avatarFallBack: string
}

const MessagesAvatar = ({ avatarFallBack, className, ...rest }: MessagesAvatarProps) => {
  return (
    <div className={cn("mt-6", className)} {...rest}>
      <Avatar className="h-fit">
        <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
          <AvatarFallback className="bg-slate-300">{avatarFallBack}</AvatarFallback>
        </div>
      </Avatar>
    </div>
  )
}

export default MessagesAvatar