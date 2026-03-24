import { createFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export const Route = createFileRoute("/(app)/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <Button disabled={!isAuthenticated} onClick={logout}>
      Cerrar sesión
    </Button>
  )
}
