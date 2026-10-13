'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/layout/logo'
import { buttonVariants } from '@/components/ui/button'
import { mainNav, megaMenus, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const closeMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const showMenu = (menuKey: string) => {
    if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current)
    setActiveMenu(menuKey)
  }
  const hideMenuSoon = () => {
    if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current)
    closeMenuTimer.current = setTimeout(() => setActiveMenu(null), 120)
  }

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
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.menuKey && showMenu(item.menuKey)}
                onMouseLeave={() => item.menuKey && hideMenuSoon()}
                onFocus={() => item.menuKey && showMenu(item.menuKey)}
              >
                {item.menuKey ? (
                  <Link
                    href={item.href}
                    aria-expanded={activeMenu === item.menuKey}
                    aria-controls={`${item.menuKey}-menu`}
                    className={cn(
                      'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground',
                      isActive(item.href) || activeMenu === item.menuKey ? 'text-primary' : 'text-foreground/80',
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn('size-4 transition-transform', activeMenu === item.menuKey && 'rotate-180')} aria-hidden="true" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground',
                      isActive(item.href) ? 'text-primary' : 'text-foreground/80',
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {activeMenu && (
          <div
            id={`${activeMenu}-menu`}
            onMouseEnter={() => showMenu(activeMenu)}
            onMouseLeave={hideMenuSoon}
            className="absolute left-1/2 top-full hidden w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 rounded-b-3xl border border-border bg-card p-6 shadow-xl lg:block"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {megaMenus[activeMenu as keyof typeof megaMenus].map((group) => (
                <section key={group.title}>
                  <h2 className="mb-3 text-base font-semibold text-foreground">{group.title}</h2>
                  <ul className="space-y-1 border-l-2 border-accent pl-4">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveMenu(null)}
                          className="block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}

        <div className="hidden items-center lg:flex">
          <Link
            href="/login"
            className={buttonVariants({
              size: 'lg',
              className: 'bg-accent px-5 text-accent-foreground hover:bg-accent/90',
            })}
          >
            Login / Register
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
            <li className="mt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={buttonVariants({ size: 'lg', className: 'w-full bg-accent text-accent-foreground hover:bg-accent/90' })}
              >
                Login / Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
