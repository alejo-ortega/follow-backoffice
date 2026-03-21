import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useAuth } from '../hooks/useAuth'

export const Route = createFileRoute('/ingreso')({
  component: RouteComponent,
})

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

function RouteComponent() {
  const { login } = useAuth()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    await login(data.username, data.password)
  })

  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      spacing={4}
      maxWidth={512}
      mx="auto"
      my={16}
    >
      <TextField
        {...register('username')}
        label="Usuario"
        error={!!errors.username}
        helperText={errors.username && errors.username.message}
      />

      <TextField
        {...register('password')}
        label="Contraseña"
        type={isPasswordVisible ? 'text' : 'password'}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  tabIndex={-1}
                  size="small"
                >
                  {isPasswordVisible ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Button loading={isSubmitting} type="submit">
        Ingresar
      </Button>
    </Stack>
  )
}
