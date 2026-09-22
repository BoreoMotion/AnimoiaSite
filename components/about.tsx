import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-[1080px] px-4 pb-14 pt-14 sm:px-6 md:pb-16 md:pt-20"
    >
      <Reveal>
        <h2
          id="about-heading"
          className="font-display text-center text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px]"
        >
          Why I Built This
        </h2>
      </Reveal>

      <Reveal
        delay={60}
        className="mx-auto mt-10 flex max-w-[720px] flex-col gap-5 text-center text-[15px] leading-[1.6] text-neutral-400 sm:text-[16px]"
      >
        <p>
          Hello! I&apos;m Baraa Khaled, better known online as Boreo, a designer and content creator
          by passion. Over the past few years, I&apos;ve been trying to break away from the creative
          software giant that has dominated the industry. Subscription costs keep rising, privacy
          policies keep getting shadier, and they no longer seem to value their users.
        </p>
        <p>
          The rapid rise of independent tools like Affinity and Blender inspired me to start
          exploring alternatives. I managed to replace almost everything else, but that one
          animation software remained irreplaceable, with nothing else offering the kind of
          experience I was looking for.
        </p>
        <p>
          So, I decided to build my own! After months of full time work, here it is. A free
          alternative built to close that gap and give creatives another option, with no paywalls
          or subscriptions. It&apos;s something I made simply because I wanted it to exist, and
          I&apos;m really happy to finally share it with creatives around the world ツ
        </p>
      </Reveal>
    </section>
  )
}
