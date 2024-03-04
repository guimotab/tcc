"use client"
import Aside from "@/components/Aside"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import AsideCreateGroup from "./components/AsideCreateGroup"
import { useParams, useRouter } from "next/navigation"

const Chat = () => {
  const params = useParams<{ step: "1" | '2' | '3' | '4' }>()
  const router = useRouter()

  const formSchema = z.object({
    nameGroup: z.string(),
    description: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameGroup: "",
      description: "",
    },
  })
  function onSubmit(value: string) {
    router.push(`./${value}`)
  }

  const fieldsForm = [
    {
      name: "nameGroup" as "nameGroup" | "description",
      label: "Nome do Grupo",
      placeholder: "Nome do grupo"
    },
    {
      name: "description" as "nameGroup" | "description",
      label: "Descrição (Opcional)",
      placeholder: "Adicione a descrição aqui"
    },
  ]
  return (
    <main className="flex w-screen h-screen">
      <Aside page="createGroup"></Aside>
      <div className="flex flex-col items-center w-full py-16">
        <Card className="flex max-w-[50rem] w-full px-8 py-4 gap-5">

          <AsideCreateGroup step={params.step} />

          <div id="divisor" className="bg-slate-200 h-full w-[2px]"></div>

          <div className="flex flex-col gap-3 w-full">
              <h1 className="text-2xl font-medium">{params.step}° Etapa</h1>

            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(event => onSubmit("2"))} className="flex flex-col space-y-3">
                {fieldsForm.map(fieldForm =>
                  <FormField
                    key={fieldForm.name}
                    control={form.control}
                    name={fieldForm.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{fieldForm.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={fieldForm.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <Button type="submit">Avançar etapa</Button>
              </form>
            </FormProvider>
          </div>

        </Card>
      </div>
    </main>
  )
}
export default Chat