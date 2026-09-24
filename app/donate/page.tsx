import type { Metadata } from 'next'
import Script from 'next/script'
import { DonateSection } from '@/components/donate-section'
import { RippleContent, RippleLayer, RippleSurface } from '@/components/ripple-surface'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Donate | Animoia',
  description:
    'Animoia is 100% free. Support future updates and development with a donation and get the Supporter role on the Animoia Discord.',
}

export default function DonatePage() {
  return (
    <div className="relative">
      <RippleSurface
        className="ripple-surface relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white"
        grainClassName="absolute z-[70]"
      >
        <SiteHeader />
        <main className="relative flex flex-1 flex-col">
          <RippleContent className="flex flex-1 flex-col">
            <DonateSection />
          </RippleContent>
          <RippleLayer />
        </main>
        <SiteFooter />
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </RippleSurface>
    </div>
  )
}
