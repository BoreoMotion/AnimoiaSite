import type { Metadata } from 'next'
import { ChangelogReleases } from '@/components/changelog-releases'
import { GrainOverlay } from '@/components/grain-overlay'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Changelog | Animoia',
  description: 'Release notes, previous versions, and download checksums for every version of Animoia.',
}

export default function ChangelogPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <ChangelogReleases />
      </main>
      <SiteFooter />
    </div>
  )
}
