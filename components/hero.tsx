import { HeroDownloads } from '@/components/hero-downloads'
import { LogoAnimation } from '@/components/logo-animation'

export function Hero() {
  return (
    <section
      id="downloads"
      className="hero-enter relative mx-auto flex w-full max-w-[820px] flex-col items-center px-5 pt-12 text-center sm:pt-14"
    >
      <LogoAnimation className="w-[206px] sm:w-[274px] md:w-[338px]" />
      <HeroDownloads />
    </section>
  )
}
