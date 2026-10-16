import type { Metadata } from 'next'
import Link from 'next/link'
import { JobFairCard } from '@/components/job-fairs/job-fair-card'
import { PageHeader } from '@/components/shared/page-header'
import { buttonVariants } from '@/components/ui/button'
import { jobFairs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Job Fairs',
  description: 'Find upcoming in-person and virtual job fairs and hiring drives across India.',
}

export default function JobFairsPage() {
  const totalVacancies = jobFairs.reduce((sum, f) => sum + f.vacancies, 0)

  return (
    <>
      <PageHeader
        tone="fairs"
        title="Job Fairs & Hiring Drives"
        description={`${jobFairs.length} upcoming events with ${totalVacancies.toLocaleString('en-IN')}+ vacancies. Register once and attend any event.`}
      />
      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
        <ul className="flex flex-col gap-4">
          {jobFairs.map((fair) => (
            <li key={fair.id}>
              <JobFairCard fair={fair} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border bg-secondary p-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-semibold text-foreground">Want to attend?</h2>
            <p className="text-sm text-muted-foreground">
              Create a free account to receive your entry pass and event reminders.
            </p>
          </div>
          <Link href="/register?role=jobseeker" className={buttonVariants({ size: 'lg', className: 'px-4' })}>
            Register for free
          </Link>
        </div>
      </div>
    </>
  )
}
