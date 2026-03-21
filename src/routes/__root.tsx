import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet, createRootRoute } from '@tanstack/react-router'

import { AuthProvider } from '../providers/AuthProvider'
import { theme } from '../theme'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Outlet />
          <CssBaseline />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
