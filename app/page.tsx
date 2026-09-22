import { About } from '@/components/about'
import { AppPreview } from '@/components/app-preview'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { FeaturesGrid } from '@/components/features-grid'
import { ScrollMarquee } from '@/components/scroll-marquee'
import { GrainOverlay } from '@/components/grain-overlay'
import { Hero } from '@/components/hero'
import { IntroGate } from '@/components/intro-gate'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <IntroGate className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <Hero />
        <AppPreview />
        <ScrollMarquee className="mt-20 md:mt-28" />
        <FeaturesGrid />
        <ScrollMarquee direction="right" />
        <Faq />
        <ScrollMarquee />
        <About />
      </main>
      <SiteFooter />
    </IntroGate>
  )
}
