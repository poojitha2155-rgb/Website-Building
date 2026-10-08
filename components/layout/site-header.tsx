'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/layout/logo'
import { buttonVariants } from '@/components/ui/button'
import { mainNav, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hidden bg-brand-dark text-xs text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-6">
          <p>{siteConfig.tagline}</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden="true" />
              Toll-free {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground',
                    isActive(item.href) ? 'text-primary' : 'text-foreground/80',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'px-4' })}>
            Login
          </Link>
          <Link
            href="/register"
            className={buttonVariants({
              size: 'lg',
              className: 'bg-accent px-4 text-accent-foreground hover:bg-accent/90',
            })}
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md hover:bg-muted lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted',
                    isActive(item.href) && 'bg-secondary text-primary',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className={buttonVariants({ size: 'lg', className: 'bg-accent text-accent-foreground hover:bg-accent/90' })}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
