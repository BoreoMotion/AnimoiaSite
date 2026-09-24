'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
  /** When false, the reveal waits (e.g. for an image to finish loading) even if in view. */
  ready?: boolean
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  ready = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const visible = inView && ready
  const Tag = as

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLLIElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        visible
          ? 'translate-y-0 scale-100 opacity-100 filter-none'
          : 'translate-y-6 scale-[0.97] opacity-0 blur-[6px] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
