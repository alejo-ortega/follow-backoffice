import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useAuth } from "../hooks/useAuth"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export default function LoginForm() {
  const { login } = useAuth()

  const { handleSubmit, register } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data.username, data.password)
    } catch {
      // TODO! handle error
    }
  })

  return (
    <form
      className="flex flex-col gap-6 mx-auto max-w-md mt-12"
      onSubmit={onSubmit}
    >
      <Input {...register("username")} />
      <Input {...register("password")} type="password" />
      <Button className="ml-auto" type="submit">
        Ingresar
      </Button>
    </form>
  )
}
