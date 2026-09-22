import type { Metadata } from 'next'
import { GrainOverlay } from '@/components/grain-overlay'
import { LicenseDocument } from '@/components/license-document'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Software License — Animoia',
  description:
    'The Animoia End User License Agreement covering the free application, paid plugins, activation, and ownership of your work.',
}

export default function LicensePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <LicenseDocument />
      </main>
      <SiteFooter />
    </div>
  )
}
