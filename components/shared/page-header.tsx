import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type PageHeaderProps = {
  title: string
  description?: string
  breadcrumb?: string
  children?: React.ReactNode
  tone?: 'default' | 'about' | 'contact' | 'guidance' | 'fairs'
}

export function PageHeader({ title, description, breadcrumb, children, tone = 'default' }: PageHeaderProps) {
  const tones = {
    default: 'border-b bg-secondary',
    about: 'border-b border-[rgba(111,76,190,0.16)] bg-[linear-gradient(135deg,rgba(242,237,255,0.96),rgba(255,255,255,0.96))]',
    contact: 'border-b border-[rgba(224,119,119,0.16)] bg-[linear-gradient(135deg,rgba(255,235,235,0.96),rgba(255,247,237,0.96))]',
    guidance: 'border-b border-[rgba(71,139,158,0.18)] bg-[linear-gradient(135deg,rgba(222,246,246,0.96),rgba(235,242,255,0.96))]',
    fairs: 'border-b border-[rgba(216,151,48,0.2)] bg-[linear-gradient(135deg,rgba(255,242,211,0.98),rgba(255,229,194,0.94))]',
  }
  return (
    <section className={tones[tone]}>
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              {breadcrumb ?? title}
            </li>
          </ol>
        </nav>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  )
}
