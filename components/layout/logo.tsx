import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  inverted?: boolean
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="Future Akshita Company home">
      <span
        aria-hidden="true"
        className={cn(
          'flex size-9 items-center justify-center rounded-lg font-heading text-base font-extrabold',
          inverted ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground',
        )}
      >
        FA
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn('font-heading text-base font-bold', inverted ? 'text-white' : 'text-foreground')}>
          Future Akshita
        </span>
        <span className={cn('text-xs', inverted ? 'text-white/70' : 'text-muted-foreground')}>
          Company · Career Services
        </span>
      </span>
    </Link>
  )
}
