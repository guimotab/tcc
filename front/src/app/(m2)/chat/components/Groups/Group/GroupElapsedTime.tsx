import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface GroupElapsedTimeProps extends HTMLAttributes<HTMLParagraphElement> {
  elapsedTime: string | undefined
}

const GroupElapsedTime = ({ elapsedTime: elipsedTime, className, ...props }: GroupElapsedTimeProps) => {
  return (
    <p className={cn("text-xs", className)}>{elipsedTime}</p>
  )
}

export default GroupElapsedTime