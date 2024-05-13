import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { Button } from "../ui/button"

const loadingVariantes = cva(
  "border-4 border-transparent h-5 w-5 rounded-full animate-spin",
  {
    variants: {
      variant: {
        default:
          "border-l-white border-t-white",
        outline:
          "border-l-blue-700 border-t-blue-700",
      },
      size: {
        sm: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-7 w-7"
      },
    },
  }
)

interface LoadingProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
  VariantProps<typeof loadingVariantes> {
  styleButton?: string
  variant?: "default" | "outline"
  size?: "sm" | "lg" | "xl"
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingProps>(
  ({ variant = "default", size = "sm", styleButton, className }) => {
    return (
      <Button variant={variant} className={styleButton}>
        <div className={cn(loadingVariantes({ variant, size }), className)} />
      </Button>
    )
  })


export default LoadingButton