"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { HTMLInputTypeAttribute, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

type nameFields = "name" | "participantsVoting"
type participantsVotingTypes = "Todos" | "Admin" | "Editor" | "Usuário"

interface IFields {
  name: nameFields
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute | "select" | "toggle" | "switch"
}

interface LoginProps {
  signInPage: "/cadastro" | "signin"
  navigationTo: "/home" | "./"
}

const VotingForm = () => {
  const [valuesParticipantsVoting, setValuesParticipantsVoting] = useState<participantsVotingTypes[]>([])

  const [isWeightedVoting, setIsWeightedVoting] = useState(false)

  const formSchema = z.object({
    name: z.string().min(1, "O email é obrigatório").email("Email inválido"),
    participantsVoting: z.string().min(1, "A senha é obrigatória"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "guimota22@gmail.com",
      participantsVoting: "1234"
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const email = values.email
    // const password = values.password

    // const resp = await AuthController.login(email, password)

    // if (!resp.data) {
    //   const errorResponse = new ResolveResponses(resp.resp)
    //   createToast(errorResponse)
    //   return
    // }
    // //inicia um histórico novo
    // setCurrentUser(resp.data!.user)
    // router.replace(navigationTo)
  }

  function handleParticipantsVoting(values: participantsVotingTypes[]) {
    const hadOptionAll = valuesParticipantsVoting?.find(value => value === "Todos") //se o "Todos" estava marcado
    const hasOptionAll = values.find(value => value === "Todos") //se o "Todos" está marcado

    if (hadOptionAll && !hasOptionAll) {
      //se o botão "todos" foi deselecionado
      return setValuesParticipantsVoting([])
    }

    if (!hadOptionAll && hasOptionAll) {
      //se o botão "todos" foi selecionado
      return setValuesParticipantsVoting(["Todos", "Admin", "Editor", "Usuário"])
    }

    if (values.length === 3 && hasOptionAll) {
      //se todos os botões estavam selecionados porém um botão foi deselecionado e não foi o "Todos"
      const newValue = values.filter(value => value !== "Todos")
      return setValuesParticipantsVoting(newValue)
    }

    const selectedAll = values.length === 3
    if (selectedAll) {
      //se os 3 cargos são selecionados
      return setValuesParticipantsVoting(["Todos", "Admin", "Editor", "Usuário"])
    }

    //se apenas alguns cargos são selecionados
    setValuesParticipantsVoting(values)
  }

  const fields = [
    {
      name: "name",
      label: "Nome da votação",
      type: "text",
      placeholder: "Insira o nome da votação"
    },
    {
      name: "participantsVoting",
      label: "Quem pode participar da votação?",
      type: "toggle",
      placeholder: "Insira o nome da votação"
    },
    {
      name: "name",
      label: "Votação com pesos personalizados?",
      type: "switch",
      placeholder: "Insira o nome da votação"
    },
  ] as IFields[]

  const toggleParticipantsVoting = ["Todos", "Admin", "Editor", "Usuário"] as participantsVotingTypes[]

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Criar Votação</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-3">

          {fields.map(fieldForm =>
            <FormField
              key={fieldForm.name}
              control={form.control}
              name={fieldForm.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldForm.label}</FormLabel>

                  {fieldForm.type === "text" &&
                    <FormControl>
                      <Input type={fieldForm.type} placeholder={fieldForm.placeholder}{...field} />
                    </FormControl>
                  }

                  {fieldForm.type === "toggle" &&
                    <ToggleGroup type="multiple" value={valuesParticipantsVoting} className="w-fit" onValueChange={handleParticipantsVoting}>
                      {toggleParticipantsVoting.map(toggle =>
                        <ToggleGroupItem value={toggle} className="border">{toggle}</ToggleGroupItem>
                      )}
                    </ToggleGroup>
                  }


                  {fieldForm.type === "switch" &&
                    <Card className="flex flex-col px-4 py-2.5 w-fit gap-2">
                      <div className="flex items-center gap-5">
                        <div className="flex flex-col gap-1">
                          <Label className="text-base">Habilitar votação com pesos personalizados</Label>
                          <Label className="text-slate-500 font-medium">Ative essa opção para personalizar o peso dos votos de cada cargo</Label>
                        </div>
                        <Switch onCheckedChange={setIsWeightedVoting} />
                      </div>

                      {isWeightedVoting && "sim"}
                    </Card>
                  }

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit">Criar</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default VotingForm