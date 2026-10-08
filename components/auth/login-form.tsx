'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { validate, type FieldErrors } from '@/lib/validation'

/*
  UI only. Connect this to a real authentication provider
  (e.g. Better Auth, Auth.js, Supabase Auth) before going live.
*/
export function LoginForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      email: { required: true, email: true, label: 'Email' },
      password: { required: true, label: 'Password' },
    })
    setErrors(result)
    if (Object.keys(result).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return <SuccessMessage title="Signed in (demo)">Connect an auth provider to enable real sign-in.</SuccessMessage>
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
      <FormField
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        error={errors.password}
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Sign in
      </button>
    </form>
  )
}
