'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// Never hold the page hostage to a slow network: after this long the intro
// runs regardless of which assets have arrived.
const MAX_WAIT_MS = 2500

type IntroGateProps = {
  children: ReactNode
  className?: string
}

/**
 * Holds the hero entrance (logo video, download panel, app preview) until
 * the assets they depend on are ready,
 * then releases them all from a single point in time so the stagger is
 * always the same regardless of load order.
 */
export function IntroGate({ children, className }: IntroGateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const video = root.querySelector<HTMLVideoElement>('video[data-intro-asset]')
    const images = Array.from(root.querySelectorAll<HTMLImageElement>('img[data-intro-asset]'))

    let released = false
    let timeout = 0
    const cleanups: Array<() => void> = []

    const release = () => {
      if (released) return
      released = true
      window.clearTimeout(timeout)
      cleanups.forEach((fn) => fn())
      setReady(true)
      if (video) {
        video.currentTime = 0
        video.play().catch(() => {})
      }
    }

    if (reduceMotion) {
      release()
      return
    }

    const waitFor = (target: EventTarget, events: string[], isDone: () => boolean) =>
      new Promise<void>((resolve) => {
        if (isDone()) return resolve()
        const done = () => {
          events.forEach((event) => target.removeEventListener(event, done))
          resolve()
        }
        events.forEach((event) => target.addEventListener(event, done, { once: true }))
        cleanups.push(done)
      })

    const pending: Promise<void>[] = images.map((img) =>
      waitFor(img, ['load', 'error'], () => img.complete),
    )

    const grain = root.querySelector<HTMLDivElement>(':scope > main > [data-grain]')
    if (grain) {
      pending.push(
        waitFor(grain, ['grain-complete'], () => grain.dataset.grainComplete === 'true'),
      )
    }

    if (video) {
      // HAVE_FUTURE_DATA (3) is enough to start playback without a stall.
      pending.push(
        waitFor(video, ['canplay', 'canplaythrough', 'error'], () => video.readyState >= 3),
      )
      if (video.readyState < 3) video.load()
    }

    // Fonts affect the hero copy's layout; wait for them too when supported.
    if (document.fonts?.status !== 'loaded') {
      pending.push(document.fonts.ready.then(() => {}))
    }

    Promise.all(pending).then(release)
    timeout = window.setTimeout(release, MAX_WAIT_MS)

    return () => {
      released = true
      window.clearTimeout(timeout)
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <div ref={ref} data-intro={ready ? 'ready' : 'pending'} className={className}>
      <noscript>
        <style>{`[data-intro='pending'] * { animation-play-state: running !important; }`}</style>
      </noscript>
      {children}
    </div>
  )
}
