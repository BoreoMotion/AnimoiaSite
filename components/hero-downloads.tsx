'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { DownloadButtons, type DownloadTarget } from '@/components/download-buttons'
import { MaskIcon } from '@/components/mask-icon'
import { LATEST_RELEASE_BASE } from '@/lib/changelog'

const DISCORD_URL = 'https://discord.gg/ZUn8Frpdbx'
const SBOM_URL = `${LATEST_RELEASE_BASE}/animoia-1.1.0-sbom.json`

export function HeroDownloads() {
  const [target, setTarget] = useState<DownloadTarget | null>(null)
  const [showThanks, setShowThanks] = useState(false)
  const thanksHeadingRef = useRef<HTMLHeadingElement>(null)
  const downloadsRef = useRef<HTMLDivElement>(null)
  const thanksRef = useRef<HTMLDivElement>(null)
  const downloadTriggerRef = useRef<HTMLElement | null>(null)
  const [panelHeight, setPanelHeight] = useState<number | null>(null)

  // Both panels share one grid cell, so the cell would otherwise size to the
  // taller panel and leave a gap under the shorter one. Track the active
  // panel's height instead so the content below moves with it.
  useLayoutEffect(() => {
    const active = showThanks ? thanksRef.current : downloadsRef.current
    if (!active) return
    const update = () => setPanelHeight(active.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(active)
    return () => observer.disconnect()
  }, [showThanks])

  const focusActivePanel = () => {
    const element = showThanks
      ? thanksHeadingRef.current
      : downloadTriggerRef.current
    element?.focus({ preventScroll: true })
  }

  useEffect(() => {
    // Reduced motion has no transitionend event to hand off keyboard focus.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const element = showThanks ? thanksHeadingRef.current : downloadTriggerRef.current
      element?.focus({ preventScroll: true })
    }
  }, [showThanks])

  const handleDownload = (download: DownloadTarget) => {
    const focused = document.activeElement as HTMLElement | null
    downloadTriggerRef.current =
      focused?.closest('[role="menu"]')?.parentElement?.querySelector('button') ??
      (focused && downloadsRef.current?.contains(focused)
        ? focused
        : downloadsRef.current?.querySelector<HTMLElement>('a[href], button') ?? null)
    setTarget(download)
    setShowThanks(true)
  }

  // Keep both panels mounted for stable layout and preserve the download
  // details while the thank-you panel blurs out on the return journey.
  const panelClass = 'download-panel relative flex w-full flex-col items-center'

  return (
    <div
      style={panelHeight === null ? undefined : { height: panelHeight }}
      className="grid w-full content-start items-start justify-items-center transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none [&>*]:col-start-1 [&>*]:row-start-1"
    >
      <div
        ref={downloadsRef}
        aria-hidden={showThanks}
        inert={showThanks || undefined}
        data-state={showThanks ? 'hidden' : 'active'}
        onTransitionEnd={(event) => {
          if (!showThanks && event.target === event.currentTarget && event.propertyName === 'filter') {
            focusActivePanel()
          }
        }}
        className={panelClass}
      >
        <p className="mt-6 max-w-[760px] text-balance text-[15px] leading-[1.4] tracking-[-0.015em] text-neutral-100 sm:text-[17px] md:mt-7 md:text-[19px]">
          Animoia is a <strong className="font-bold">FREE</strong> motion graphics and compositing
          app built around a familiar layer based workflow. Animoia gives you a powerful, flexible
          workspace for bringing ideas to life, with everything you need to design, animate, and
          composite in one place.
        </p>

        <DownloadButtons onDownload={handleDownload} />

  <p className="mt-5 flex w-full flex-col items-center gap-y-1.5 whitespace-nowrap text-[13px] text-neutral-500 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-x-2.5 sm:gap-y-0 sm:text-[14px]">
  <span className="flex items-center justify-end gap-x-2.5">
  <Link href="/changelog" className="transition-colors hover:text-neutral-300">
  Previous Versions
  </Link>
  <span aria-hidden className="hidden text-neutral-400 sm:inline">
  •
  </span>
  </span>
  <Link href="/license" className="transition-colors hover:text-neutral-300">
  Software License
  </Link>
  <span className="flex items-center justify-start gap-x-2.5">
  <span aria-hidden className="hidden text-neutral-400 sm:inline">
  •
  </span>
  <a
  href={SBOM_URL}
  download="animoia-1.1.0-sbom.json"
  className="transition-colors hover:text-neutral-300"
  >
  Download SBOM
  </a>
  </span>
  </p>
      </div>

      <div
        ref={thanksRef}
        aria-hidden={!showThanks}
        inert={!showThanks || undefined}
        data-state={showThanks ? 'active' : 'hidden'}
        onTransitionEnd={(event) => {
          if (showThanks && event.target === event.currentTarget && event.propertyName === 'filter') {
            focusActivePanel()
          }
        }}
        className={panelClass}
      >
        <h2
          ref={thanksHeadingRef}
          tabIndex={-1}
          className="mt-7 text-[17px] font-bold leading-tight tracking-[-0.015em] text-white outline-none sm:text-[19px] md:mt-8"
        >
          Thanks for downloading Animoia
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-neutral-400 sm:text-[15px] lg:whitespace-nowrap">
          Your <strong className="font-semibold text-white">{target?.platform}</strong> download
          should be starting now. If nothing happened,{' '}
          <a
            href={target?.href}
            className="text-white underline decoration-white/40 underline-offset-[3px] transition-colors hover:decoration-white"
          >
            start the download manually
          </a>
          .
        </p>

        <div className="mt-5 w-full max-w-[600px] rounded-[4px] border border-white/10 bg-white/[0.04] px-5 py-4 text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
            How to install
          </p>
          <p className="mt-1.5 text-pretty text-[14px] leading-[1.7] text-neutral-300 sm:text-[15px]">
            {target?.install}
          </p>
        </div>

        <code
          aria-label="SHA256 checksum"
          className="mt-4 block max-w-[600px] break-all font-mono text-[12px] text-neutral-600 sm:text-[13px]"
        >
          {target?.sha256}
        </code>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans flex h-[38px] items-center justify-center gap-2.5 rounded-[3px] bg-[#5865F2] px-5 text-[14px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-[#4752c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MaskIcon src="/icons/discord.svg" className="size-[16px] text-white" />
            Join our Discord
          </a>
          <button
            type="button"
            onClick={() => setShowThanks(false)}
            className="font-sans flex h-[38px] items-center justify-center rounded-[3px] border border-white/15 px-5 text-[14px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Back to downloads
          </button>
        </div>
      </div>
    </div>
  )
}
