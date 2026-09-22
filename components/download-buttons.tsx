'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { GrainOverlay } from '@/components/grain-overlay'
import { MaskIcon } from '@/components/mask-icon'
import { LATEST_RELEASE_BASE as RELEASE_BASE, SHA256_1_1_0 } from '@/lib/changelog'

export type DownloadTarget = {
  platform: string
  href: string
  sha256: string
  install: string
}

const install = {
  windows:
    'Run the .exe. Windows may show a "Windows protected your PC" warning because the app is not signed: click "More info", then "Run anyway".',
  mac:
    'Open the .dmg and drag Animoia to Applications. On first launch macOS may block it because the app is not signed: right-click the app, choose Open, then confirm. If it is still blocked, go to System Settings → Privacy & Security and click "Open Anyway".',
  appimage:
    'Make the file executable (chmod +x animoia-*.AppImage, or right-click → Properties → allow executing), then run it. No install step needed.',
  deb: 'Install with sudo apt install ./animoia-1.1.0-linux.deb (or open it with your package manager), then launch Animoia from your app menu.',
}

type DownloadOption = DownloadTarget & {
  label: string
  hint: string
}

type DownloadEntry = {
  label: string
  short: string
  icon: string
  iconClass: string
  href?: string
  platform?: string
  sha256?: string
  install?: string
  options?: DownloadOption[]
}

const downloads: DownloadEntry[] = [
  {
    label: 'Download for Windows',
    short: 'Windows',
    icon: '/icons/windows.svg',
    iconClass: 'size-[13px]',
    href: `${RELEASE_BASE}/animoia-1.1.0-windows.exe`,
    platform: 'Windows',
    sha256: SHA256_1_1_0.windows,
    install: install.windows,
  },
  {
    label: 'Download for macOS',
    short: 'macOS',
    icon: '/icons/apple.svg',
    iconClass: 'size-[15px] -mt-0.5',
    options: [
      {
        label: 'Apple Silicon',
        hint: 'M1 and later',
        platform: 'macOS (Apple Silicon)',
        href: `${RELEASE_BASE}/animoia-1.1.0-macOS-arm64.dmg`,
        sha256: SHA256_1_1_0.macArm64,
        install: install.mac,
      },
      {
        label: 'Intel',
        hint: 'x86_64',
        platform: 'macOS (Intel)',
        href: `${RELEASE_BASE}/animoia-1.1.0-macOS-x64.dmg`,
        sha256: SHA256_1_1_0.macX64,
        install: install.mac,
      },
    ],
  },
  {
    label: 'Download for Linux',
    short: 'Linux',
    icon: '/icons/linux.svg',
    iconClass: 'size-[15px]',
    options: [
      {
        label: 'AppImage',
        hint: 'Universal',
        platform: 'Linux (AppImage)',
        href: `${RELEASE_BASE}/animoia-1.1.0-linux.AppImage`,
        sha256: SHA256_1_1_0.appImage,
        install: install.appimage,
      },
      {
        label: '.deb',
        hint: 'Debian / Ubuntu',
        platform: 'Linux (.deb)',
        href: `${RELEASE_BASE}/animoia-1.1.0-linux.deb`,
        sha256: SHA256_1_1_0.deb,
        install: install.deb,
      },
    ],
  },
]

const buttonClass =
  'font-sans flex h-[38px] w-full items-center justify-center gap-2.5 rounded-[3px] bg-white text-[14px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white aria-expanded:bg-neutral-200'

type DownloadButtonsProps = {
  onDownload: (target: DownloadTarget) => void
}

export function DownloadButtons({ onDownload }: DownloadButtonsProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!openMenu) return
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpenMenu(null)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenMenu(null)
      containerRef.current
        ?.querySelector<HTMLButtonElement>(`[data-menu="${openMenu}"]`)
        ?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openMenu])

  const choose = (target: DownloadTarget) => {
    setOpenMenu(null)
    onDownload(target)
  }

  return (
    <div
      ref={containerRef}
      className="mt-7 grid w-full max-w-[720px] grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3"
    >
      {downloads.map((item) =>
        item.options ? (
          <DownloadMenu
            key={item.short}
            item={item}
            open={openMenu === item.short}
            onToggle={() => setOpenMenu((current) => (current === item.short ? null : item.short))}
            onChoose={choose}
          />
        ) : (
          // the file is served as an attachment, so the page stays put: let the
          // default click through and just swap the hero panel alongside it
          <a
            key={item.short}
            href={item.href}
            className={buttonClass}
            onClick={() =>
              choose({
                platform: item.platform!,
                href: item.href!,
                sha256: item.sha256!,
                install: item.install!,
              })
            }
          >
            <MaskIcon src={item.icon} className={`text-black ${item.iconClass}`} />
            {item.label}
          </a>
        ),
      )}
    </div>
  )
}

type DownloadMenuProps = {
  item: DownloadEntry
  open: boolean
  onToggle: () => void
  onChoose: (target: DownloadTarget) => void
}

function DownloadMenu({ item, open, onToggle, onChoose }: DownloadMenuProps) {
  const menuId = useId()
  const toggleId = `${menuId}-toggle`

  return (
    <div className={`relative ${open ? 'z-[80]' : ''}`}>
      <button
        type="button"
        id={toggleId}
        data-menu={item.short}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={onToggle}
        className={buttonClass}
      >
        <MaskIcon src={item.icon} className={`text-black ${item.iconClass}`} />
        {item.label}
      </button>

      <div
        id={menuId}
        role="menu"
        aria-labelledby={toggleId}
        hidden={!open}
        className="absolute left-0 right-0 top-[calc(100%+6px)] isolate flex flex-col gap-1 overflow-hidden rounded-[6px] border border-white/10 bg-[#141415] p-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-1 duration-150 motion-reduce:animate-none"
      >
        <GrainOverlay />
        {item.options!.map((option) => (
          <a
            key={option.platform}
            role="menuitem"
            href={option.href}
            onClick={() => onChoose(option)}
            className="flex items-center justify-between rounded-[4px] px-3 py-2 text-left text-[13.5px] text-white transition-colors hover:bg-white/[0.08] focus-visible:bg-white/[0.08] focus-visible:outline-none"
          >
            <span className="font-medium">{option.label}</span>
            <span className="text-[12px] text-neutral-500">{option.hint}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
