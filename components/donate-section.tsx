import { DonateForm } from '@/components/donate-form'
import { MaskIcon } from '@/components/mask-icon'
import { Reveal } from '@/components/reveal'

const DISCORD_URL = 'https://discord.gg/ZUn8Frpdbx'

export function DonateSection() {
  return (
    <section
      aria-labelledby="donate-heading"
      className="mx-auto flex w-full max-w-[720px] flex-1 flex-col items-center px-4 pb-8 pt-14 text-center sm:px-6 md:pt-20"
    >
      <Reveal className="flex flex-col items-center">
        <h1 id="donate-heading" className="flex items-center gap-4 sm:gap-5">
          <MaskIcon src="/brand/animoia-mark.svg" className="h-[52px] w-[57px] text-white sm:h-[62px] sm:w-[68px]" />
          <MaskIcon src="/brand/animoia-wordmark.svg" className="h-[46px] w-[230px] text-white sm:h-[54px] sm:w-[270px]" />
          <span className="sr-only">Donate to Animoia</span>
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-8 text-pretty text-[15px] leading-[1.7] text-neutral-400 sm:text-[16px]">
          Animoia is <strong className="font-semibold text-white">100% free</strong>, and it&apos;s made
          to stay that way. Keeping it updated, maintained, and actively developed takes a lot of work,
          though. If you enjoy using it and want to support future updates and development, donations are
          always appreciated. Even a small contribution helps. Thanks in advance!
        </p>
      </Reveal>

      <Reveal delay={140} className="w-full">
        <div className="mt-7 w-full rounded-[4px] border border-white/10 bg-white/[0.04] px-5 py-4 text-left">
          <p className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.02em] text-neutral-500">
            <MaskIcon src="/icons/discord.svg" className="h-[11px] w-[14px]" />
            Supporter Perk
          </p>
          <p className="mt-1.5 text-pretty text-[14px] leading-[1.7] text-neutral-300 sm:text-[15px]">
            Donators get the <strong className="font-semibold text-white">Supporter</strong> role on the{' '}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/40 underline-offset-[3px] transition-colors hover:decoration-white"
            >
              Animoia Discord server
            </a>
            .
          </p>
        </div>
      </Reveal>

      <Reveal delay={200} className="w-full">
        <DonateForm />
      </Reveal>

      <Reveal delay={260}>
        <p className="mt-6 text-[13px] leading-[1.5] text-neutral-500">
          Payments are handled securely by Gumroad. Donations are one-time and non-refundable.
        </p>
      </Reveal>

      <div className="mt-auto flex justify-center pt-20 md:pt-28">
        <a
          href="https://gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Powered by Gumroad (opens in a new tab)"
          className="block h-[14px] w-[152px] bg-neutral-500 transition-colors hover:bg-neutral-300 [mask-image:url('/marketplace/powered-by-gumroad.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
        />
      </div>
    </section>
  )
}
