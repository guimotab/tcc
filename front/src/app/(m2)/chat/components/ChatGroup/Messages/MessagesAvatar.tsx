import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface MessagesAvatarProps extends HTMLAttributes<HTMLDivElement> {
  avatarFallBack: string
  src: string
}

const MessagesAvatar = ({ src, avatarFallBack, className, ...rest }: MessagesAvatarProps) => {
  return (
    <div className={cn("mt-6", className)} {...rest}>
      <AvatarWorker nameFallback={avatarFallBack} src={src} className="w-9 h-9" sizeText="text-lg" />
    </div>
  )
}

export default MessagesAvatar