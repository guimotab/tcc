"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HTMLInputTypeAttribute } from "react";
import ResolveResponses from "@/utils/resolveResponseErrors";
import { toast } from "sonner";
import AuthController from "@/controllers/AuthController";
import { useUpdateCurrentUser } from "../../../states/hooks/useUpdateCurrentUser";

type nameFields = "email" | "password"

interface IFields {
  name: nameFields
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
}

interface LoginProps {
  signInPage: "/cadastro" | "signin"
  navigationTo: "/home" | "./"
}

export default function LoginForm({ signInPage, navigationTo }: LoginProps) {
  const router = useRouter()
  const setCurrentUser = useUpdateCurrentUser()

  const formSchema = z.object({
    email: z.string().min(1, "O email é obrigatório").email("Email inválido"),
    password: z.string().min(1, "A senha é obrigatória"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "guimota22@gmail.com",
      password: "1234"
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const email = values.email
    const password = values.password

    const resp = await AuthController.login(email, password)

    if (!resp.data) {
      const errorResponse = new ResolveResponses(resp.resp)
      createToast(errorResponse)
      return
    }
    //inicia um histórico novo
    setCurrentUser(resp.data!.user)
    router.replace(navigationTo)
  }

  function createToast(errorResponse: ResolveResponses) {
    const [title, description] = errorResponse.resolveResponse()
    toast(title, {
      description: description,
      action: {
        label: "Entendi",
        onClick: () => "",
      },
    })
  }

  const fields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Insira seu email",
    },
    {
      name: "password",
      label: "Senha",
      placeholder: "Insira sua senha",
      type: "password",
    },
  ] as IFields[]

  return (
    <Card className="w-full max-w-[26rem]">
      <CardHeader className="flex flex-col items-center pb-3">
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription className="flex items-center m-0">
          Não tenho tenho conta?
          <Link href={signInPage} className="text-sm font-medium underline">
            <Button variant={"link"} className="p-1">Criar Conta</Button>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Button className="flex justify-center items-center gap-2" variant={"outline"}>
          <FcGoogle className="text-xl" />
          <p>Continuar com Google</p>
        </Button>
        <div className="flex items-center gap-4">
          <div className="border flex-1"></div>
          <p className="text-sm font-medium">Ou</p>
          <div className="border flex-1"></div>
        </div>
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
                    <FormControl>
                      <Input type={fieldForm.type} placeholder={fieldForm.placeholder}{...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit">Entrar</Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
