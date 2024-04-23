"use client"
import { Badge } from "@/components/ui/badge"

const LoadingMessage = () => {

  return (
    <div className="flex justify-center w-full">
      <Badge className="bg-blue-100 px-4 py-1">
        <div className="border-4 border-transparent border-l-blue-700 border-t-blue-700 h-5 w-5 rounded-full animate-spin">
        </div>
      </Badge>
    </div>
  )
}

export default LoadingMessage