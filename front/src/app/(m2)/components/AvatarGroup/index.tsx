import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { formAcronym } from "@/utils/formAcronym"
import { HTMLAttributes } from "react"

interface AvatarUserProps extends HTMLAttributes<HTMLSpanElement> {
  src: string | undefined
  nameFallback: string
  sizeText?: "text-2xl" | "text-xl" | "text-lg" | "text-base" | "text-sm" | "text-xs"
}

const AvatarGroup = ({ src, nameFallback, className, sizeText = "text-2xl", ...props }: AvatarUserProps) => {
  return (
    <Avatar className={cn("w-32 h-32 bg-slate-300", className)} {...props}>
      <AvatarImage src={src} className="object-cover" />
      <AvatarFallback className={cn("bg-slate-300", sizeText)}>{formAcronym(nameFallback, 2)}</AvatarFallback>
    </Avatar>
  )
}

export default AvatarGroup