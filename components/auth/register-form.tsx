'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { cn } from '@/lib/utils'
import { validate, type FieldErrors } from '@/lib/validation'

type Role = 'jobseeker' | 'employer'

export function RegisterForm({ initialRole }: { initialRole: Role }) {
  const [role, setRole] = useState<Role>(initialRole)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      name: { required: true, label: role === 'employer' ? 'Company name' : 'Full name' },
      email: { required: true, email: true, label: 'Email' },
      phone: { required: true, phone: true, label: 'Mobile number' },
      password: { required: true, minLength: 8, label: 'Password' },
    })
    if (!data.get('terms')) result.terms = 'Please accept the terms to continue'
    setErrors(result)
    if (Object.keys(result).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <SuccessMessage title="Account created (demo)">
        Connect an auth provider and database to store real accounts.
      </SuccessMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div role="radiogroup" aria-label="I am a" className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
        {(['jobseeker', 'employer'] as const).map((r) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={role === r}
            onClick={() => setRole(r)}
            className={cn(
              'h-9 rounded-md text-sm font-medium transition-colors',
              role === r ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {r === 'jobseeker' ? 'Job Seeker' : 'Employer'}
          </button>
        ))}
      </div>
      <input type="hidden" name="role" value={role} />

      <FormField
        label={role === 'employer' ? 'Company name' : 'Full name'}
        name="name"
        required
        autoComplete={role === 'employer' ? 'organization' : 'name'}
        error={errors.name}
      />
      <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
      <FormField label="Mobile number" name="phone" type="tel" required autoComplete="tel" error={errors.phone} />
      <FormField
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="new-password"
        hint="At least 8 characters"
        error={errors.password}
      />

      <div>
        <label className="flex items-start gap-2.5 text-sm text-foreground/85">
          <input type="checkbox" name="terms" className="mt-0.5 size-4 accent-[var(--primary)]" />
          I agree to the Terms of Use and Privacy Policy.
        </label>
        {errors.terms && <p className="mt-1 text-xs text-destructive">{errors.terms}</p>}
      </div>

      <button
        type="submit"
        className="h-11 rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Create account
      </button>
    </form>
  )
}
