'use client'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash || !document.querySelector(hash)) return
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('animoia:scroll-to', { detail: hash }))
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const lenis = reducedMotion.matches ? null : new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    const resetScroll = () => {
      const hash = window.location.hash
      const hashTarget = hash ? document.querySelector<HTMLElement>(hash) : null
      lenis?.resize()
      if (hashTarget) {
        lenis?.scrollTo(hashTarget, { immediate: true, force: true })
        if (!lenis) hashTarget.scrollIntoView()
        return
      }
      lenis?.scrollTo(0, { immediate: true, force: true })
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    const scrollToTop = () => {
      if (!lenis || reducedMotion.matches) {
        resetScroll()
        return
      }
      lenis.scrollTo(0, {
        duration: 1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        force: true,
      })
    }
    const scrollToSection = (event: Event) => {
      const selector = (event as CustomEvent<string>).detail
      const target = document.querySelector<HTMLElement>(selector)
      if (!target) return
      if (!lenis || reducedMotion.matches) {
        target.scrollIntoView()
        return
      }
      // Lenis caches the scroll limit; after a route change it may still hold the previous page's height.
      lenis.resize()
      lenis.scrollTo(target, {
        duration: 1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        force: true,
      })
    }

    resetScroll()
    window.addEventListener('pageshow', resetScroll)
    window.addEventListener('animoia:scroll-to-top', scrollToTop)
    window.addEventListener('animoia:scroll-to', scrollToSection)

    let frame = 0
    const raf = (time: number) => {
      lenis?.raf(time)
      frame = requestAnimationFrame(raf)
    }
    if (lenis) frame = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('pageshow', resetScroll)
      window.removeEventListener('animoia:scroll-to-top', scrollToTop)
      window.removeEventListener('animoia:scroll-to', scrollToSection)
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}
