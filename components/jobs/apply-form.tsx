'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { validate, type FieldErrors } from '@/lib/validation'

export function ApplyForm({ jobTitle, company }: { jobTitle: string; company: string }) {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      name: { required: true, label: 'Full name' },
      email: { required: true, email: true, label: 'Email' },
      phone: { required: true, phone: true, label: 'Mobile number' },
    })
    setErrors(result)
    if (Object.keys(result).length === 0) {
      // TODO: send `data` to your backend, e.g. fetch('/api/applications', { method: 'POST', body: data })
      setSubmitted(true)
    }
  }

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground">Apply for this job</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {jobTitle} at {company}
      </p>

      {submitted ? (
        <div className="mt-5">
          <SuccessMessage title="Application submitted">
            {"We've shared your profile with the employer. You'll receive updates by email."}
          </SuccessMessage>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-4">
          <FormField label="Full name" name="name" required autoComplete="name" error={errors.name} />
          <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
          <FormField
            label="Mobile number"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="98765 43210"
            error={errors.phone}
          />
          <FormField label="Resume" name="resume" type="file" accept=".pdf,.doc,.docx" hint="PDF or Word, max 2 MB" />
          <FormField as="textarea" label="Cover note" name="note" placeholder="Why are you a good fit?" />
          <button
            type="submit"
            className="h-11 rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Submit application
          </button>
        </form>
      )}
    </div>
  )
}
