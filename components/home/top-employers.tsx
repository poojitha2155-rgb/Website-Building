import Link from 'next/link'
import { CompanyInitials } from '@/components/jobs/job-card'
import { SectionHeading } from '@/components/shared/section-heading'
import { employers } from '@/lib/data'

export function TopEmployers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <SectionHeading
        eyebrow="Trusted by employers"
        title="Top companies hiring now"
        description="Verified organisations actively recruiting through Akshitha Edutech."
      />
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {employers.map((employer) => (
          <li key={employer.name}>
            <Link
              href={`/jobs?q=${encodeURIComponent(employer.name)}`}
              className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <CompanyInitials name={employer.name} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">{employer.name}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {employer.industry} · {employer.city}
                </span>
                <span className="mt-0.5 block text-xs font-medium text-primary">{employer.openings} open roles</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
