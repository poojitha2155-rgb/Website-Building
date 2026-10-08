'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { validate, type FieldErrors } from '@/lib/validation'

const topics = ['Choosing a course', 'Career switch', 'Interview preparation', 'Resume review', 'Skill development']
const slots = ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM']

export function CounsellingForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const today = new Date().toISOString().split('T')[0]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      name: { required: true, label: 'Full name' },
      email: { required: true, email: true, label: 'Email' },
      phone: { required: true, phone: true, label: 'Mobile number' },
      topic: { required: true, label: 'Topic' },
      date: { required: true, label: 'Preferred date' },
      slot: { required: true, label: 'Time slot' },
    })
    setErrors(result)
    if (Object.keys(result).length === 0) {
      // TODO: send `data` to your backend
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <SuccessMessage title="Session requested">
        A counsellor will confirm your booking shortly.
      </SuccessMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 rounded-xl border bg-card p-6 sm:grid-cols-2">
      <FormField label="Full name" name="name" required autoComplete="name" error={errors.name} />
      <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
      <FormField label="Mobile number" name="phone" type="tel" required autoComplete="tel" error={errors.phone} />
      <FormField as="select" label="Topic" name="topic" required options={topics} error={errors.topic} />
      <FormField label="Preferred date" name="date" type="date" min={today} required error={errors.date} />
      <FormField as="select" label="Time slot" name="slot" required options={slots} error={errors.slot} />
      <FormField
        as="textarea"
        label="Anything we should know?"
        name="notes"
        className="sm:col-span-2"
        placeholder="Your education, current role, goals…"
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 sm:col-span-2"
      >
        Book free session
      </button>
    </form>
  )
}
