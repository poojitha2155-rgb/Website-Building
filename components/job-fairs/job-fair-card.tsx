import { Building2, CalendarDays, MapPin, Users } from 'lucide-react'
import { formatDate, type jobFairs } from '@/lib/data'

type JobFair = (typeof jobFairs)[number]

export function JobFairCard({ fair }: { fair: JobFair }) {
  const date = new Date(fair.date)
  return (
    <article className="flex h-full gap-4 rounded-xl border bg-card p-5">
      <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary py-3 text-primary-foreground">
        <span className="text-xs font-medium uppercase">
          {date.toLocaleDateString('en-IN', { month: 'short' })}
        </span>
        <span className="font-heading text-2xl font-bold leading-none">{date.getDate()}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground">{fair.title}</h3>
          <span
            className={
              fair.mode === 'Virtual'
                ? 'rounded-full bg-accent/25 px-2 py-0.5 text-xs font-medium text-accent-foreground'
                : 'rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground'
            }
          >
            {fair.mode}
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            <time dateTime={fair.date}>{formatDate(fair.date)}</time>
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {fair.venue}, {fair.city}
          </li>
          <li className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Building2 className="size-4 shrink-0" aria-hidden="true" />
              {fair.employers} employers
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-4 shrink-0" aria-hidden="true" />
              {fair.vacancies.toLocaleString('en-IN')} vacancies
            </span>
          </li>
        </ul>
      </div>
    </article>
  )
}
