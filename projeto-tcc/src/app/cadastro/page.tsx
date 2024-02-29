"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

const SignIn = () => {
  const router = useRouter()

  // const formSchema = z.object({
  //   username: z.string().min(3).max(12),
  //   email: z.string().min(2).max(50),
  //   password: z.string().min(4).max(20),
  //   confirmPassword: z.string().min(4).max(20)
  // })
  const formSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/m2/home")
  }

  return (
    <main className="flex h-screen items-center justify-between p-24">
      <div className="w-full border-r h-full">
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <Card className="w-full max-w-[26rem]">
          <CardHeader className="flex flex-col items-center pb-3">
            <CardTitle className="text-xl">Cadastro</CardTitle>
            <CardDescription className="flex items-center m-0">
              Já tenho conta?
              <Link href={"/"} className="text-sm font-medium underline">
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
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usuário</FormLabel>
                      <FormControl>
                        <Input placeholder="usuário" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="confirmar senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Criar Conta</Button>
              </form>
            </FormProvider>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}
export default SignIn