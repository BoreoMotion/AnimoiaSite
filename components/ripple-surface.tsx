'use client'

import { createContext, useContext, type ReactNode, type RefObject } from 'react'
import { GrainOverlay } from './grain-overlay'
import { RIPPLE_FILTER_ID, useDisplacementRipple } from './use-displacement-ripple'

type PlayRipple = (clientX: number, clientY: number, power?: number) => void

type RippleContextValue = {
  play: PlayRipple
  layerRef: RefObject<HTMLDivElement | null>
  contentRef: RefObject<HTMLDivElement | null>
}

const RippleContext = createContext<RippleContextValue | null>(null)

export function useRipple() {
  return useContext(RippleContext)?.play ?? (() => {})
}

export function RippleContent({ className, children }: { className?: string; children: ReactNode }) {
  const contentRef = useContext(RippleContext)?.contentRef

  return (
    <div ref={contentRef} className={className}>
      {children}
    </div>
  )
}

export function RippleLayer() {
  const layerRef = useContext(RippleContext)?.layerRef

  return (
    <div ref={layerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[70] overflow-hidden" />
  )
}

export function RippleSurface({
  className,
  grainClassName,
  children,
}: {
  className?: string
  grainClassName?: string
  children: ReactNode
}) {
  const { contentRef, rippleLayerRef, filterRef, grainRef, play } = useDisplacementRipple()

  return (
    <RippleContext.Provider value={{ play, layerRef: rippleLayerRef, contentRef }}>
      <div className={className}>{children}</div>
      {grainClassName && <GrainOverlay ref={grainRef} className={grainClassName} />}
      <svg aria-hidden="true" width="0" height="0" className="pointer-events-none absolute">
        {/* Primitives are injected by useDisplacementRipple on the first ripple. */}
        <filter
          ref={filterRef}
          id={RIPPLE_FILTER_ID}
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        />
      </svg>
    </RippleContext.Provider>
  )
}
