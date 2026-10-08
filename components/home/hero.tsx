import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { JobSearchBar } from '@/components/jobs/job-search-bar'

const popularSearches = ['React Developer', 'Nurse', 'Accountant', 'Teacher', 'Data Analyst']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            2.4 lakh+ verified vacancies this month
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Your next career move starts <span className="text-accent">here</span>.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Search jobs from verified employers, get free career counselling, and join job fairs across India — all in
            one place.
          </p>

          <div className="mt-8">
            <JobSearchBar />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/60">Popular:</span>
            {popularSearches.map((term) => (
              <Link
                key={term}
                href={`/jobs?q=${encodeURIComponent(term)}`}
                className="rounded-full border border-white/20 px-3 py-1 text-white/85 transition-colors hover:bg-white/10"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.png"
              alt="Young professionals collaborating in a modern office"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-card p-4 text-card-foreground shadow-lg md:left-[-1.5rem]">
            <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold">12,480 candidates hired</p>
              <p className="text-xs text-muted-foreground">in the last 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
