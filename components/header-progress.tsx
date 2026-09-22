'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type Phase = 'idle' | 'loading' | 'done'

const LOADING_DURATION_MS = 900
const DONE_DURATION_MS = 220
const FADE_DURATION_MS = 300

/**
 * Fills the header's bottom outline from left to right whenever the user
 * clicks a button or link, then completes and fades once navigation settles.
 */
export function HeaderProgress() {
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  const finish = () => {
    clearTimers()
    setPhase('done')
    timers.current.push(
      window.setTimeout(() => setPhase('idle'), DONE_DURATION_MS + FADE_DURATION_MS),
    )
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Next.js Link calls preventDefault for client-side navigation, so don't bail on it.
      if (event.button !== 0) return
      const target = (event.target as HTMLElement | null)?.closest('a, button')
      if (!target || target.hasAttribute('disabled')) return

      clearTimers()
      // Reset to idle first so a rapid second click restarts from zero.
      setPhase('idle')
      timers.current.push(
        window.setTimeout(() => setPhase('loading'), 16),
        window.setTimeout(finish, LOADING_DURATION_MS),
      )
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      clearTimers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Route change lands before the timer: snap to full immediately.
  const previousPath = useRef(pathname)
  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname
      if (phase === 'loading') finish()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const width = phase === 'idle' ? '0%' : phase === 'loading' ? '85%' : '100%'
  const transition =
    phase === 'idle'
      ? 'none'
      : phase === 'loading'
        ? `width ${LOADING_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : `width ${DONE_DURATION_MS}ms ease-out, opacity ${FADE_DURATION_MS}ms ease ${DONE_DURATION_MS}ms`

  return (
    <div
      aria-hidden="true"
      data-header-progress={phase}
      className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 bg-neutral-600"
      style={{ width, opacity: phase === 'done' ? 0 : 1, transition }}
    />
  )
}
