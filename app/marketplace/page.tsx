import type { Metadata } from 'next'
import { GrainOverlay } from '@/components/grain-overlay'
import { MarketplaceGrid } from '@/components/marketplace-grid'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Marketplace | Animoia',
  description: 'Add-ons, effects, and tools built for Animoia. Buy once, own it forever.',
}

export default function MarketplacePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <MarketplaceGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
