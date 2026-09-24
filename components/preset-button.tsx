'use client'

import { useEffect, useRef, useState, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

// Keep the pressed state long enough for the shrink to be visible on fast taps.
const MIN_PRESS_MS = 140

export function PresetButton({ className, onClick, ...props }: ComponentProps<'button'>) {
  const [pressed, setPressed] = useState(false)
  const pressStartRef = useRef(0)
  const releaseTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(releaseTimerRef.current), [])

  function press() {
    clearTimeout(releaseTimerRef.current)
    pressStartRef.current = performance.now()
    setPressed(true)
  }

  function release() {
    const remaining = MIN_PRESS_MS - (performance.now() - pressStartRef.current)
    clearTimeout(releaseTimerRef.current)
    releaseTimerRef.current = setTimeout(() => setPressed(false), Math.max(remaining, 0))
  }

  return (
    <button
      type="button"
      data-pressed={pressed || undefined}
      onPointerDown={(event) => {
        if (event.button === 0) press()
      }}
      onPointerUp={release}
      onPointerLeave={() => pressed && release()}
      onPointerCancel={release}
      onKeyDown={(event) => {
        if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) press()
      }}
      onKeyUp={(event) => {
        if (event.key === ' ' || event.key === 'Enter') release()
      }}
      onClick={onClick}
      className={cn(
        'select-none transition-[scale,background-color,color] duration-[520ms] ease-[cubic-bezier(0.3,2.2,0.45,1)] data-[pressed]:scale-[0.88] data-[pressed]:duration-[140ms] data-[pressed]:ease-out motion-reduce:scale-100',
        className,
      )}
      {...props}
    />
  )
}
