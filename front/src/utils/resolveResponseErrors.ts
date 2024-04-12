import { messageResponse } from "@/types/messageResponse";

interface ImessageErrors {
  title: string,
  description?: string
}

const arrayErrors = {
  Success: {
    title: "Sucesso!"
  },
  AxiosError: {
    title: "Ocorreu um erro no servidor!",
    description: "Verifique sua conexão."
  },
  CredentialsSignin:{
    title: "Esse email já existe!",
  }
} as Record<messageResponse, ImessageErrors>

export default class ResolveResponseErrors {
  private _error: messageResponse
  private _arrayErrors = arrayErrors
  constructor(error: messageResponse) {
    this._error = error
  }
  resolveError() {
    const { title, description } = this._arrayErrors[this._error]
    return [title, description] as [title: string, description?: string]
  }
}
