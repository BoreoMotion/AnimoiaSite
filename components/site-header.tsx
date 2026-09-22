'use client'

import Link from 'next/link'
import { MaskIcon } from '@/components/mask-icon'
import { GrainOverlay } from '@/components/grain-overlay'
import { HeaderProgress } from '@/components/header-progress'

const navLinks = [
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Donate', href: 'https://donate.animoia.com' },
  { label: 'Documentation', href: 'https://animoia.gitbook.io/animoia-docs' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 isolate z-60 w-full shrink-0 border-b-2 border-white/10 bg-[#0a0a0a]">
      <GrainOverlay />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[60px] max-w-[1920px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          aria-label="Animoia home"
          className="flex items-center"
          onNavigate={(event) => {
            if (window.location.pathname !== '/') return
            event.preventDefault()
            window.dispatchEvent(new Event('animoia:scroll-to-top'))
          }}
        >
          <MaskIcon
            src="/brand/animoia-wordmark.svg"
            className="h-[20px] w-[100px] text-neutral-500 transition-colors hover:text-neutral-300 sm:h-[22px] sm:w-[110px]"
            label="Animoia"
          />
        </Link>

        <div className="flex items-center gap-5 sm:gap-8 lg:gap-12">
          <ul className="hidden items-center gap-6 md:flex lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-display text-[17px] font-light tracking-[-0.01em] text-neutral-500 transition-colors hover:text-neutral-200 lg:text-[19px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://discord.gg/ZUn8Frpdbx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join the Animoia Discord"
              className="flex items-center text-neutral-500 transition-colors hover:text-neutral-200"
            >
              <MaskIcon
                src="/icons/discord.svg"
                className="h-[20px] w-[26px]"
                label="Discord"
              />
            </a>
            <a
              href="https://youtube.com/@animoiaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Animoia on YouTube"
              className="flex items-center text-neutral-500 transition-colors hover:text-neutral-200"
            >
              <MaskIcon
                src="/icons/youtube.svg"
                className="h-[18px] w-[26px]"
                label="YouTube"
              />
            </a>
          </div>
        </div>
      </nav>
      <HeaderProgress />
    </header>
  )
}
