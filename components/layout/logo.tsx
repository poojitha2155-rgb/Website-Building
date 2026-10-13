import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  inverted?: boolean
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex min-w-0 items-center', className)} aria-label="Akshitha Edutech home">
      <Image
        src="/images/akshitha-edutech-logo.png"
        alt="Akshitha Edutech"
        width={520}
        height={180}
        priority
        className="h-auto max-h-14 w-auto max-w-[min(100%,17rem)] object-contain object-left"
      />
    </Link>
  )
}
