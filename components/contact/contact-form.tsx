'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { validate, type FieldErrors } from '@/lib/validation'

const subjects = ['Job seeker support', 'Employer support', 'Job fair enquiry', 'Report a fake listing', 'Other']

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      name: { required: true, label: 'Name' },
      email: { required: true, email: true, label: 'Email' },
      subject: { required: true, label: 'Subject' },
      message: { required: true, minLength: 10, label: 'Message' },
    })
    setErrors(result)
    if (Object.keys(result).length === 0) {
      // TODO: send `data` to your backend or an email service
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <SuccessMessage title="Message sent">
        {"Thanks for reaching out. We'll reply within one working day."}
      </SuccessMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 rounded-xl border bg-card p-6 sm:grid-cols-2">
      <FormField label="Name" name="name" required autoComplete="name" error={errors.name} />
      <FormField label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
      <FormField
        as="select"
        label="Subject"
        name="subject"
        required
        options={subjects}
        className="sm:col-span-2"
        error={errors.subject}
      />
      <FormField
        as="textarea"
        label="Message"
        name="message"
        required
        className="sm:col-span-2"
        error={errors.message}
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2"
      >
        Send message
      </button>
    </form>
  )
}
