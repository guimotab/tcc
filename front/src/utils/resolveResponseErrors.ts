import { MessageResponse } from "@/types/MessageResponse";

interface IMessageResponse {
  title: string,
  description?: string
}

const arrayResponse = {
  Success: {
    title: "Sucesso!"
  },
  AxiosError: {
    title: "Ocorreu um erro no servidor!",
    description: "Verifique sua conexão."
  },
  ServerError: {
    title: "Ocorreu um erro no servidor!",
    description: "Tente novamente mais tarte."
  },
  UserNotFound: {
    title: "Usuário não encontrado!",
  },
  GroupNotFound: {
    title: "Grupo não encontrado!",
  },
  EmailAlreadyUsed: {
    title: "Esse email já está em uso!",
  },
  InvalidInvite: {
    title: "Convite inválido!"
  },
  IncorrectCredentials: {
    title: "Email ou senha incorretos!"
  },
  UserExistOnGroup: {
    title: "Esse usuário já existe no grupo"
  },
  CredentialsSignin: {
    title: "Esse email já existe!",
  },
  ChatNotFound:{
    title: "Chat não encontrado!",
  },
  MessageNotFound:{
    title: "Mensagem não encontrada!",
  },
  ActivityNotFound:{
    title: "Atividade não encontrada!"
  },
  UserVotingNotFound:{
    title: "Votação do usuário não encontrada!"
  }
} as Record<MessageResponse, IMessageResponse>

export default class ResolveResponses {
  private _error: MessageResponse
  private _customReponse?: IMessageResponse

  constructor(error: MessageResponse, customResponse?: IMessageResponse) {
    this._error = error
    this._customReponse = customResponse
  }

  resolveResponse() {

    if (this._customReponse) {
      const { title, description } = this._customReponse
      return { title, description } as { title: string, description?: string }
    }
    // try {
    const { title, description } = arrayResponse[this._error]
    return { title, description } as { title: string, description?: string }
    // } catch {
    //   const [title, description] = ["Ocorreu um erro no servidor!", "Tente novamente mais tarde."]
    //   return [title, description] as [title: string, description?: string]
    // }
  }
}
