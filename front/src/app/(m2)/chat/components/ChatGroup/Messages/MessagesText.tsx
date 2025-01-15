import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const textVariants = cva(
  "break-words max-w-[22rem]",
  {
    variants: {
      side: {
        left:
          "",
        right:
          "text-white mr-3.5",
      },
    },
  }
)

interface MessagesTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants>, VariantProps<typeof textVariants> {
  side: "left" | "right"
}

const MessagesText = React.forwardRef<HTMLParagraphElement, MessagesTextProps>(
  ({ children, side, className, ...rest }, ref) => {
    return (
      <p className={cn(textVariants({ side, className }))} {...rest}>
        {children}
      </p>
    )
  }
)
export default MessagesText