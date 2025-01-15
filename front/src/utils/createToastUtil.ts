import ResolveResponses from "@/utils/resolveResponseErrors"
import { toast } from "@/components/ui/use-toast"

export function createToast(variant: "default" | "destructive", messageResponse: ResolveResponses){
  const { title, description } = messageResponse.resolveResponse()
    toast({
      title,
      description,
      variant,
    })
}