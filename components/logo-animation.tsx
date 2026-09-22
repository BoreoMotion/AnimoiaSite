import { cn } from '@/lib/utils'

// Source video is 1518x314 with black padding around the artwork. The mark +
// wordmark occupy x 119-1437, y 19-293. The wrapper is sized to that content
// box (so layout matches the old mark + wordmark footprint) and the video is
// offset inside it by the padding percentages.
const VIDEO_W = 1518
const VIDEO_H = 314
const CONTENT_X = 119
const CONTENT_Y = 19
const CONTENT_W = 1318
const CONTENT_H = 275

const pct = (n: number, d: number) => `${(n / d) * 100}%`

type LogoAnimationProps = {
  /** Width classes for the content box, e.g. "w-[206px] sm:w-[274px]". */
  className?: string
}

export function LogoAnimation({ className }: LogoAnimationProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{ aspectRatio: `${CONTENT_W} / ${CONTENT_H}` }}
    >
      <video
        // Playback is started by IntroGate once the rest of the hero is
        // ready, so the logo, copy and preview always enter in lockstep.
        data-intro-asset
        muted
        playsInline
        preload="auto"
        aria-label="Animoia"
        // Firefox has no `plus-lighter`; `screen` is visually identical for
        // white-on-black artwork over a near-black page.
        className="absolute block max-w-none select-none mix-blend-screen supports-[mix-blend-mode:plus-lighter]:mix-blend-plus-lighter"
        style={{
          width: pct(VIDEO_W, CONTENT_W),
          height: pct(VIDEO_H, CONTENT_H),
          left: `-${pct(CONTENT_X, CONTENT_W)}`,
          top: `-${pct(CONTENT_Y, CONTENT_H)}`,
        }}
        src="/brand/logo-animation.mp4"
      />
    </div>
  )
}
