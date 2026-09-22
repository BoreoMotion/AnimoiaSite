'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const ITEM_COUNT = 24
const SCROLL_FACTOR = 0.35

type ScrollMarqueeProps = {
  direction?: 'left' | 'right'
  className?: string
}

export function ScrollMarquee({ direction = 'left', className }: ScrollMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const sign = direction === 'left' ? 1 : -1

    // Page scrolling is already eased by Lenis, so the marquee follows
    // scrollY directly to stay in sync with the rest of the page.
    const apply = () => {
      const half = track.scrollWidth / 2
      if (!half) return
      const position = window.scrollY * SCROLL_FACTOR * sign
      const offset = -(((position % half) + half) % half)
      track.style.transform = `translate3d(${offset}px, 0, 0)`
    }

    apply()
    window.addEventListener('scroll', apply, { passive: true })
    window.addEventListener('resize', apply)
    return () => {
      window.removeEventListener('scroll', apply)
      window.removeEventListener('resize', apply)
    }
  }, [direction])

  const items = Array.from({ length: ITEM_COUNT })

  return (
    <div
      aria-label="Animoia"
      className={cn(
        'relative w-full overflow-hidden bg-[#121212] py-3.5',
        className,
      )}
    >
      <div
        ref={trackRef}
        className="flex w-max select-none items-center will-change-transform"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-6 pr-6 font-display text-[21px] tracking-[-0.01em] text-neutral-600"
              >
                Animoia
                <span aria-hidden="true" className="text-[10px] leading-none text-neutral-700">
                  ●
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
