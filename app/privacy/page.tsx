import type { Metadata } from 'next'
import { GrainOverlay } from '@/components/grain-overlay'
import { LegalDocument } from '@/components/legal-document'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { PRIVACY_CLOSING, PRIVACY_INTRO, PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from '@/lib/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy | Animoia',
  description:
    'The Animoia 1.2.0 Privacy Policy: offline project data, optional Discord and MCP integrations, paid plugin activation, and your privacy rights.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <LegalDocument
          title="Animoia Privacy Policy"
          lastUpdated={PRIVACY_LAST_UPDATED}
          intro={PRIVACY_INTRO}
          sections={PRIVACY_SECTIONS}
          closing={PRIVACY_CLOSING}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
