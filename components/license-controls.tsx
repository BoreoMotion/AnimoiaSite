'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function LicenseControls({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  function setExpanded(open: boolean) {
    container.current?.querySelectorAll<HTMLDetailsElement>('details').forEach((detail) => {
      detail.open = open
    })
  }

  return (
    <div className="mt-8 flex flex-col gap-10">
      <div aria-label="License display controls" className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!ready}
          aria-controls="third-party-components"
          onClick={() => setExpanded(true)}
          className="rounded-[6px] border border-white/15 px-4 py-2 text-[14px] text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-50"
        >
          Expand all
        </button>
        <button
          type="button"
          disabled={!ready}
          aria-controls="third-party-components"
          onClick={() => setExpanded(false)}
          className="rounded-[6px] border border-white/15 px-4 py-2 text-[14px] text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-50"
        >
          Collapse all
        </button>
      </div>
      <div ref={container} id="third-party-components" className="flex min-w-0 flex-col gap-12">
        {children}
      </div>
    </div>
  )
}
