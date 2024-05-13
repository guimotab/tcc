"use client"
import Link from "next/link"
import { FormProvider, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import AuthController from "@/controllers/AuthController"
import ResolveResponses from "@/utils/resolveResponseErrors"
import { zodResolver } from "@hookform/resolvers/zod"
import { HTMLInputTypeAttribute, ChangeEvent } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { useUpdateCurrentUser } from "../../../states/hooks/useUpdateCurrentUser"
import { useRouter } from "next/navigation"

type nameFields = "name" | "email" | "password" | "confirmPassword"

interface IFields {
  name: nameFields
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
}

interface SignInProps {
  loginPage: "/" | "login"
  navigationTo: "/home" | "./"
}

const SignInForm = ({ loginPage, navigationTo }: SignInProps) => {
  const router = useRouter()
  const setCurrentUser = useUpdateCurrentUser()

  const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O email é obrigatório").email("Email inválido"),
    password: z.string().min(1, "A senha é obrigatória"),
    confirmPassword: z.string()
  })


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const isEqualPasswords = values.password === values.confirmPassword
    if (isEqualPasswords) {
      const name = values.name
      const email = values.email
      const password = values.password

      const resp = await AuthController.signUp(name, email, password)
      if (resp.resp !== "Success") {
        const errorResponse = new ResolveResponses(resp.resp)
        return createToast(errorResponse)
      }
      setCurrentUser(resp.data!.user)
      router.replace(navigationTo)

    } else {
      setErrors("password", "As senhas devem ser iguais!")
      setErrors("confirmPassword")
    }
  }

  function createToast(resolveResponse: ResolveResponses) {
    const [title, description] = resolveResponse.resolveResponse()
    toast(title, {
      description: description,
      action: {
        label: "Entendi",
        onClick: () => "",
      },
    })
  }

  function setErrors(fields: nameFields, message = "") {
    form.setError(fields, { message })
  }
  function clearError(fields: nameFields) {
    form.clearErrors(fields)
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const nameInput = event.target.name as nameFields

    if (nameInput === "password") {
      clearError("confirmPassword")
    }
    form.setValue(nameInput, value)
    clearError(nameInput)
  }

  const fields = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Insira seu nome",
    },
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
    {
      name: "confirmPassword",
      label: "Confirmar Senha",
      placeholder: "Repita a senha",
      type: "password",
    },
  ] as IFields[]

  return (
    <Card className="w-full max-w-[26rem]">
      <CardHeader className="flex flex-col items-center pb-3">
        <CardTitle className="text-xl">Cadastro</CardTitle>
        <CardDescription className="flex items-center m-0">
          Já tenho conta?
          <Link href={loginPage} className="text-sm font-medium underline">
            <Button variant={"link"} className="p-1">Login</Button>
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
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>{fieldForm.label}</FormLabel>
                    <FormControl>
                      <Input type={fieldForm.type} placeholder={fieldForm.placeholder} onChange={handleChangeInput} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit">Criar Conta</Button>
          </form>
        </FormProvider>

      </CardContent>
    </Card>
  )
}

export default SignInForm