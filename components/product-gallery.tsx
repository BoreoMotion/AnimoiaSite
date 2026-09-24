'use client'

import Image from 'next/image'
import { Expand, Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import type { ProductMedia } from '@/lib/marketplace'

const FRAME = 'border border-white/[0.12] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.75)]'

function LoopingVideo({ item, className }: { item: Extract<ProductMedia, { type: 'video' }>; className?: string }) {
  return (
    <video
      className={className}
      poster={item.poster}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      preload="auto"
      aria-label={item.label}
    >
      {item.webmSrc && <source src={item.webmSrc} type="video/webm" />}
      <source src={item.src} type="video/mp4" />
    </video>
  )
}

function Lightbox({ item, onClose }: { item: ProductMedia; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-label={item.label}
      className="m-0 flex h-dvh max-h-none w-screen max-w-none items-center justify-center bg-transparent p-4 backdrop:bg-black/85 backdrop:backdrop-blur-sm sm:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-white/[0.12] bg-black/60 text-white outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <X className="size-5" aria-hidden="true" />
      </button>
      <div className={cn('relative aspect-video w-full max-w-[min(1600px,calc((100dvh-5rem)*16/9))] overflow-hidden rounded-[12px] bg-black', FRAME)}>
        {item.type === 'video' ? (
          <LoopingVideo item={item} className="size-full object-contain" />
        ) : (
          <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" />
        )}
      </div>
    </dialog>,
    document.body,
  )
}

export function ProductGallery({ media }: { media: ProductMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const active = media[activeIndex]

  return (
    <div className="relative z-50 flex min-w-0 flex-col gap-3">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open ${active.label} in a larger view`}
        className={cn(
          'group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-[12px] bg-black outline-none focus-visible:ring-2 focus-visible:ring-white/60',
          FRAME,
        )}
      >
        {active.type === 'video' ? (
          <LoopingVideo key={active.src} item={active} className="size-full object-contain" />
        ) : (
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-contain"
            priority
          />
        )}
        <span className="pointer-events-none absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand className="size-4" aria-hidden="true" />
        </span>
      </button>

      {media.length > 1 && (
        <div role="group" aria-label="Product media" className="flex gap-3">
          {media.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              aria-label={`Show ${item.label}`}
              className={cn(
                'relative isolate aspect-video w-32 shrink-0 overflow-hidden rounded-[8px] border bg-black shadow-[0_6px_16px_-8px_rgba(0,0,0,0.75)] outline-none transition-[border-color,filter] focus-visible:ring-2 focus-visible:ring-white/60 sm:w-40',
                index === activeIndex
                  ? 'border-white/60'
                  : 'border-white/[0.12] brightness-75 hover:brightness-100',
              )}
            >
              {item.type === 'video' ? (
                <>
                  {item.poster ? (
                    <Image src={item.poster} alt="" fill sizes="160px" className="object-cover" />
                  ) : (
                    <span className="absolute inset-0 bg-black" />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-8 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/20">
                      <Play className="ml-0.5 size-3.5 fill-white text-white" aria-hidden="true" />
                    </span>
                  </span>
                </>
              ) : (
                <Image src={item.src} alt="" fill sizes="160px" className="object-cover" />
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && <Lightbox item={active} onClose={() => setIsOpen(false)} />}
    </div>
  )
}
