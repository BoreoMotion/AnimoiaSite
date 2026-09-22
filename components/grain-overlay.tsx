'use client'

import { useEffect, useRef, useState } from 'react'

function finishGrain(element: HTMLDivElement | null) {
  if (!element || element.dataset.grainComplete === 'true') return
  element.dataset.grainComplete = 'true'
  element.dispatchEvent(new Event('grain-complete'))
}

const GRAIN_SRC = '/images/grain-optimized.webp'

export function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finishIfReduced = () => {
      if (reducedMotion.matches) finishGrain(ref.current)
    }
    finishIfReduced()
    reducedMotion.addEventListener('change', finishIfReduced)
    return () => reducedMotion.removeEventListener('change', finishIfReduced)
  }, [ready])

  useEffect(() => {
    let cancelled = false
    const image = new Image()
    image.decoding = 'async'
    image.fetchPriority = 'low'
    image.src = GRAIN_SRC

    // Download completion alone can still expose partially decoded pixels.
    image.decode().then(() => {
      if (!cancelled) setReady(true)
    }).catch(() => {
      // A decorative texture must never block the page if it fails to load.
      if (!cancelled) finishGrain(ref.current)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      ref={ref}
      onAnimationEnd={(event) => {
        if (event.animationName === 'grain-reveal') finishGrain(event.currentTarget)
      }}
      aria-hidden="true"
      data-grain={ready ? 'ready' : 'pending'}
      className="grain-overlay pointer-events-none absolute inset-0 z-40 bg-repeat mix-blend-plus-lighter"
      style={{
        backgroundImage: ready ? `url('${GRAIN_SRC}')` : 'none',
        backgroundSize: '284px 284px',
        // Remove the texture's gray floor before Add blending, not from the page beneath it.
        // Contrast is baked into the asset to avoid filtering a page-sized layer.
        imageRendering: 'pixelated',
      }}
    />
  )
}
