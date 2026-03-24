import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router"

import { Spinner } from "@/components/ui/spinner"
import { useAuth } from "@/hooks/useAuth"

export const Route = createFileRoute("/(app)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  const { isAuthenticated, isPending } = useAuth()

  if (isPending) {
    return <Spinner />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/ingreso" />
}
