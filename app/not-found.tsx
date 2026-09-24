import type { Metadata } from 'next'
import Link from 'next/link'
import { GrainOverlay } from '@/components/grain-overlay'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Lost in the timeline | Animoia',
  description: 'This page slipped off the timeline. Head back to Animoia.',
}

const detours = [
  { label: 'Changelog', href: '/changelog' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'License', href: '/license' },
]

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <section
          aria-labelledby="not-found-heading"
          className="hero-enter mx-auto flex w-full max-w-[820px] flex-1 flex-col items-center justify-center px-5 py-20 text-center md:py-28"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-neutral-500 sm:text-[13px]">
            Error 404 · Frame not found
          </p>

          <p
            aria-hidden
            className="font-display mt-5 select-none text-[120px] font-normal leading-[0.85] tracking-[-0.06em] text-white sm:text-[168px] md:text-[208px]"
          >
            4<span className="text-neutral-600">0</span>4
          </p>

          <Timeline />

          <h1
            id="not-found-heading"
            className="font-display mt-10 text-balance text-[30px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[38px]"
          >
            Lost in the timeline
          </h1>
          <p className="mt-4 max-w-[520px] text-balance text-[15px] leading-[1.5] text-neutral-400 sm:text-[17px]">
            {"Looks like this page got scrubbed past the last keyframe. It either moved, never existed, or is still rendering somewhere."}
          </p>

          <Link
            href="/"
            className="mt-9 inline-flex h-11 items-center justify-center rounded-[6px] bg-white px-6 text-[15px] font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Back to the start
          </Link>

          <nav aria-label="Other pages" className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-2.5 text-[13px] text-neutral-500 sm:text-[14px]">
              {detours.map((link, index) => (
                <li key={link.href} className="flex items-center gap-x-2.5">
                  {index > 0 && (
                    <span aria-hidden className="text-neutral-700">
                      /
                    </span>
                  )}
                  <Link href={link.href} className="transition-colors hover:text-neutral-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function Timeline() {
  const ticks = Array.from({ length: 25 }, (_, index) => index)

  return (
    <div aria-hidden className="mt-8 w-full max-w-[460px]">
      <div className="relative rounded-[6px] border border-white/[0.09] bg-[#0f0f0f] px-4 pb-3 pt-4">
        <div className="flex items-end justify-between">
          {ticks.map((tick) => (
            <span
              key={tick}
              className={tick % 6 === 0 ? 'h-3 w-px bg-neutral-500' : 'h-1.5 w-px bg-neutral-700'}
            />
          ))}
        </div>
        <div className="relative mt-3 h-1.5 rounded-full bg-white/[0.06]">
          <span className="absolute inset-y-0 left-0 w-[58%] rounded-full bg-neutral-600" />
          <span className="absolute -top-2 left-[58%] h-5 w-0.5 -translate-x-1/2 rounded-full bg-white" />
          <span className="absolute left-[78%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-neutral-500" />
        </div>
        <div className="mt-3 flex justify-between font-mono text-[11px] text-neutral-600">
          <span>00:00</span>
          <span className="text-neutral-400">04:04</span>
          <span>{'??:??'}</span>
        </div>
      </div>
    </div>
  )
}
