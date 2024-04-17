"use client"
import { Label } from "@radix-ui/react-label"

const ErrorInvite = () => {
  return (
    <main className="flex justify-center w-screen">
      <div className="flex flex-col items-center w-full pt-10 gap-3">
        <div className="flex flex-col gap-1">
          <h1>ChatWorker - Erro no convite!</h1>
          <Label>Houve um erro ao usar o convite...</Label>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Os possíveis erros são:</Label>
          <ul>
            <li>Convite já usado</li>
            <li>Convite incorreto</li>
            <li>Você já está no grupo</li>
            <li>Erro no servidor</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default ErrorInvite