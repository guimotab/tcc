import { errorsResponse } from "@/types/errorsResponse";

export default function resolveResponseErrors(error: errorsResponse) {
  let title = ""
  let description: string | undefined
  if (error === "AxiosError") {
    title = "Ocorreu um erro no servidor!",
      description = "Verifique sua conexão."
  }
  return [title, description]
}