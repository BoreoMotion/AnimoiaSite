'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import { PresetButton } from './preset-button'
import { useRipple } from './ripple-surface'

// Your Gumroad "pay what you want" donation product link.
const GUMROAD_PRODUCT_URL = 'https://boreo.gumroad.com/l/animoia-donate'
const MIN_AMOUNT = 1
const MAX_AMOUNT = 5000
const PRESETS = [10, 15, 25, 50, 75, 100]
const COUNT_DURATION = 450
const CELEBRATE_AMOUNT = 100
// The weakest preset ripples like $50 used to (50 / 100); larger presets scale up to full strength.
const MIN_RIPPLE_POWER = 0.5

function sanitizeAmount(raw: string) {
  const digits = raw.replace(/\D/g, '').replace(/^0+/, '')
  if (digits === '') return String(MIN_AMOUNT)
  return Number(digits) > MAX_AMOUNT ? String(MAX_AMOUNT) : digits
}

function validate(value: string) {
  if (value === '') return 'Enter a donation amount.'
  const amount = Number(value)
  if (amount < MIN_AMOUNT) return `The minimum donation is $${MIN_AMOUNT}.`
  if (amount > MAX_AMOUNT) return `The maximum donation is $${MAX_AMOUNT.toLocaleString('en-US')}.`
  return ''
}

export function DonateForm() {
  const [value, setValue] = useState('10')
  const [counting, setCounting] = useState(false)
  const play = useRipple()
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const countFrameRef = useRef(0)
  const countTargetRef = useRef<number | null>(null)
  const countFromRef = useRef(0)

  useEffect(() => () => cancelAnimationFrame(countFrameRef.current), [])

  function stopCounting() {
    cancelAnimationFrame(countFrameRef.current)
    countTargetRef.current = null
    setCounting(false)
  }

  function countTo(target: number) {
    const from = Number(value) || 0
    cancelAnimationFrame(countFrameRef.current)
    countTargetRef.current = target
    countFromRef.current = from
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(String(target))
      stopCounting()
      return
    }
    setCounting(true)
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_DURATION, 1)
      const eased = 1 - (1 - t) ** 3
      setValue(String(Math.round(from + (target - from) * eased)))
      if (t < 1) countFrameRef.current = requestAnimationFrame(tick)
      else stopCounting()
    }
    countFrameRef.current = requestAnimationFrame(tick)
  }

  const error = validate(value)
  const valid = error === ''
  const amount = Number(value)

  const checkoutUrl = new URL(GUMROAD_PRODUCT_URL)
  checkoutUrl.searchParams.set('wanted', 'true')
  checkoutUrl.searchParams.set('price', String(valid ? amount : MIN_AMOUNT))

  function rippleFrom(event: MouseEvent<HTMLButtonElement>, preset: number) {
    const rect = event.currentTarget.getBoundingClientRect()
    const smallest = PRESETS[0]
    const largest = PRESETS[PRESETS.length - 1]
    const power = MIN_RIPPLE_POWER + (1 - MIN_RIPPLE_POWER) * ((preset - smallest) / (largest - smallest))
    play(rect.left + rect.width / 2, rect.top + rect.height / 2, power)
  }

  const celebrating = valid && amount >= CELEBRATE_AMOUNT
  const countTarget = countTargetRef.current
  let celebrateLevel = celebrating ? 1 : 0
  if (counting && countTarget !== null && countTarget !== countFromRef.current) {
    const from = countFromRef.current
    const startLevel = from >= CELEBRATE_AMOUNT ? 1 : 0
    const endLevel = countTarget >= CELEBRATE_AMOUNT ? 1 : 0
    const progress = Math.min(Math.max((amount - from) / (countTarget - from), 0), 1)
    celebrateLevel = startLevel + (endLevel - startLevel) * progress
  }

  return (
    <form
      noValidate
      onSubmit={(event) => event.preventDefault()}
      className="mt-8 flex w-full flex-col items-center"
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <label htmlFor="donate-amount" className="sr-only">
          Donation amount in US dollars
        </label>
        <div
          data-invalid={!valid && value !== ''}
          className="flex h-[46px] flex-1 items-center gap-2 rounded-[3px] border border-white/10 bg-white/[0.04] px-4 transition-colors focus-within:border-white/35 data-[invalid=true]:border-[#e5484d]/70"
        >
          <span aria-hidden="true" className="text-[15px] text-neutral-500">
            $
          </span>
          <input
            ref={inputRef}
            id="donate-amount"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            placeholder="10"
            value={value}
            aria-invalid={!valid}
            aria-describedby="donate-amount-error"
            onBeforeInput={(event) => {
              const data = (event.nativeEvent as InputEvent).data
              if (data && /\D/.test(data)) event.preventDefault()
            }}
            onChange={(event) => {
              stopCounting()
              const input = event.target
              const fellBackToMin = /^0*$/.test(input.value.replace(/\D/g, ''))
              setValue(sanitizeAmount(input.value))
              // Select the fallback so the next keystroke replaces it instead of appending.
              if (fellBackToMin) requestAnimationFrame(() => input.select())
            }}
            onKeyDown={(event) => {
              if (event.key !== 'Enter' || event.nativeEvent.isComposing || event.keyCode === 229) return
              event.preventDefault()
              if (valid) buttonRef.current?.click()
            }}
            className="min-w-0 flex-1 bg-transparent text-[15px] tabular-nums text-white outline-none placeholder:text-neutral-600"
          />
        </div>

        <a
          ref={buttonRef}
          href={checkoutUrl.toString()}
          data-gumroad-overlay-checkout="true"
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!valid}
          onClickCapture={(event) => {
            if (!valid) {
              event.preventDefault()
              event.stopPropagation()
              inputRef.current?.focus()
            }
          }}
          className={cn(
            'font-sans relative isolate flex h-[44px] items-center justify-center gap-2.5 self-center overflow-hidden rounded-[3px] bg-[#e5484d] px-7 text-[15px] font-semibold tracking-[-0.01em] transition-colors hover:bg-[#d13d42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-[#e5484d] sm:min-w-[160px]',
            celebrateLevel > 0.5 ? 'text-[#1a1a1a]' : 'text-white',
          )}
        >
          <span
            aria-hidden="true"
            data-idle={celebrateLevel === 0}
            style={{ opacity: celebrateLevel }}
            className={cn(
              'donate-gradient-layer pointer-events-none absolute inset-y-0 left-0 -z-10',
              !counting && 'transition-opacity duration-500 ease-out',
            )}
          />
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[16px] shrink-0 fill-current">
            <path
              className={cn(celebrating && !counting && 'donate-heartbeat')}
              d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 4.5 6.7 4.1c2.1-.2 3.8.9 5.3 2.7 1.5-1.8 3.2-2.9 5.3-2.7 3.8.4 5.8 4.3 4.3 7.7C19.5 16.4 12 21 12 21Z"
            />
          </svg>
          {valid ? `Donate $${amount}` : 'Donate'}
        </a>
      </div>

      <p
        id="donate-amount-error"
        role="alert"
        aria-live="polite"
        className="mt-2 min-h-[20px] w-full text-center text-[13px] text-[#ff8a8d]"
      >
        {value === '' || counting ? '' : error}
      </p>

      <fieldset className="mt-1 grid w-full grid-cols-3 gap-2 sm:grid-cols-6">
        <legend className="sr-only">Quick amounts</legend>
        {PRESETS.map((preset) => (
          <PresetButton
            key={preset}
            data-no-progress
            onClick={(event) => {
              const alreadySet = counting ? countTargetRef.current === preset : value === String(preset)
              if (!alreadySet) countTo(preset)
              rippleFrom(event, preset)
            }}
            className="h-[40px] rounded-[3px] border border-white/10 bg-white/[0.04] text-[14px] font-semibold tabular-nums tracking-[-0.01em] text-neutral-400 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ${preset}
          </PresetButton>
        ))}
      </fieldset>
    </form>
  )
}
