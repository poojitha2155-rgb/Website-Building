'use client'

import { useState } from 'react'
import { FormField, SuccessMessage } from '@/components/forms/form-field'
import { jobCategories, jobTypes, locations } from '@/lib/data'
import { validate, type FieldErrors } from '@/lib/validation'

export function PostJobForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = validate(data, {
      company: { required: true, label: 'Company name' },
      title: { required: true, label: 'Job title' },
      category: { required: true, label: 'Sector' },
      location: { required: true, label: 'Location' },
      type: { required: true, label: 'Job type' },
      email: { required: true, email: true, label: 'Contact email' },
      description: { required: true, minLength: 30, label: 'Job description' },
    })
    setErrors(result)
    if (Object.keys(result).length === 0) {
      // TODO: send `data` to your backend
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <SuccessMessage title="Job submitted for review">
        {"Thank you! We'll verify the details and publish your vacancy within 24 hours."}
      </SuccessMessage>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 rounded-xl border bg-card p-6 sm:grid-cols-2">
      <FormField label="Company name" name="company" required error={errors.company} autoComplete="organization" />
      <FormField label="Job title" name="title" required error={errors.title} />
      <FormField
        as="select"
        label="Sector"
        name="category"
        required
        options={jobCategories.map((c) => c.name)}
        error={errors.category}
      />
      <FormField as="select" label="Location" name="location" required options={locations} error={errors.location} />
      <FormField as="select" label="Job type" name="type" required options={jobTypes} error={errors.type} />
      <FormField label="Number of openings" name="openings" type="number" min={1} defaultValue={1} />
      <FormField label="Salary range" name="salary" placeholder="e.g. ₹4 – 6 LPA" />
      <FormField label="Contact email" name="email" type="email" required error={errors.email} autoComplete="email" />
      <FormField
        as="textarea"
        label="Job description"
        name="description"
        required
        className="sm:col-span-2"
        error={errors.description}
        hint="Describe responsibilities, requirements and benefits."
      />
      <button
        type="submit"
        className="h-11 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2"
      >
        Submit job posting
      </button>
    </form>
  )
}
