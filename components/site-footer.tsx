'use client'

import Link from 'next/link'
import { GrainOverlay } from '@/components/grain-overlay'
import { MaskIcon } from '@/components/mask-icon'
import { LATEST_RELEASE_BASE } from '@/lib/changelog'

const DISCORD_URL = 'https://discord.gg/ZUn8Frpdbx'
const YOUTUBE_URL = 'https://youtube.com/@animoiaofficial'
const DOCS_URL = 'https://animoia.gitbook.io/animoia-docs'
const SBOM_URL = `${LATEST_RELEASE_BASE}/animoia-1.1.0-sbom.json`

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Burning Questions', href: '/#faq' },
    ],
  },
  {
    title: 'Downloads',
    links: [
      { label: 'SBOM', href: SBOM_URL, external: true },
      { label: 'Previous Versions', href: '/changelog' },
      { label: 'Software License', href: '/license' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: DOCS_URL, external: true },
      { label: 'Donate', href: 'https://donate.animoia.com', external: true },
      { label: 'Get in contact', href: 'mailto:baraa@animoia.com', external: true },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: DISCORD_URL, external: true },
      { label: 'YouTube', href: YOUTUBE_URL, external: true },
    ],
  },
]

const socials = [
  { label: 'Discord', href: DISCORD_URL, icon: '/icons/discord.svg', className: 'h-[16px] w-[21px]' },
  { label: 'YouTube', href: YOUTUBE_URL, icon: '/icons/youtube.svg', className: 'h-[15px] w-[21px]' },
]

export function SiteFooter() {
  return (
    <footer className="relative isolate w-full border-t-2 border-white/10 bg-[#0d0d0d]">
      <GrainOverlay />
      <div className="mx-auto w-full max-w-[1920px] px-5 pb-6 pt-10 sm:px-8 md:pt-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Animoia home" className="w-fit">
              <MaskIcon
                src="/brand/animoia-wordmark.svg"
                className="h-[22px] w-[110px] text-neutral-300 transition-colors hover:text-white"
                label="Animoia"
              />
            </Link>
            <p className="max-w-[240px] text-[14px] leading-[1.5] text-neutral-500">
              The free motion graphics and compositing app for Windows, macOS, and Linux
            </p>
            <ul className="flex items-center gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Animoia on ${social.label}`}
                    className="flex items-center text-neutral-500 transition-colors hover:text-neutral-200"
                  >
                    <MaskIcon src={social.icon} className={social.className} label={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h2 className="font-display text-[15px] font-normal tracking-[-0.01em] text-neutral-200">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-neutral-500 transition-colors hover:text-neutral-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] text-neutral-500 transition-colors hover:text-neutral-200"
                        onNavigate={(event) => {
                          const hashIndex = link.href.indexOf('#')
                          if (hashIndex === -1 || window.location.pathname !== '/') return
                          const selector = link.href.slice(hashIndex)
                          if (!document.querySelector(selector)) return
                          event.preventDefault()
                          window.history.replaceState(null, '', selector)
                          window.dispatchEvent(new CustomEvent('animoia:scroll-to', { detail: selector }))
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[13px] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Animoia. All rights reserved.</p>
          <p>Made with care by an independent developer.</p>
        </div>
      </div>
    </footer>
  )
}
