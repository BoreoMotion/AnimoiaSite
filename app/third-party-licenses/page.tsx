import type { Metadata } from 'next'
import { GrainOverlay } from '@/components/grain-overlay'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThirdPartyLicenses } from '@/components/third-party-licenses'

export const metadata: Metadata = {
  title: 'Third-Party Licenses | Animoia',
  description:
    'Open-source software, fonts, and assets included in Animoia 1.2.0, with complete licenses, copyright notices, and source-code information.',
  alternates: { canonical: '/third-party-licenses' },
}

export default function ThirdPartyLicensesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <ThirdPartyLicenses />
      </main>
      <SiteFooter />
    </div>
  )
}
