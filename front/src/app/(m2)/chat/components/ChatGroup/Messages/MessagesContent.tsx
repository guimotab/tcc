import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import MessagesText from "./MessagesText"
import { IoCheckmarkDone } from "react-icons/io5"

const contentVariants = cva(
  "h-full max-w-[25rem] w-fit rounded-b-lg px-4 py-1.5 ",
  {
    variants: {
      side: {
        left:
          "rounded-e-lg bg-white",
        right:
          "rounded-l-lg self-end relative bg-blue-700",
      },
    },
  }
)

interface MessagesContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof contentVariants>, VariantProps<typeof contentVariants> {
  side: "left" | "right"
}

const MessagesContent = React.forwardRef<HTMLDivElement, MessagesContentProps>(
  ({ children, side, className, ...rest }, ref) => {
    return (
      <div className={cn(contentVariants({ side, className }))} {...rest}>
        <MessagesText side={side}>
          {children}
          {side === "right" &&
            <IoCheckmarkDone className="absolute bottom-1.5 right-1.5 text-white" />
          }
        </MessagesText>
      </div>
    )
  }
)
export default MessagesContent