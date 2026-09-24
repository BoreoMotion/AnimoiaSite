'use client'

import { useId, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Is Animoia really free?',
    answer:
      'Yes! Animoia is completely free to download and use. No trials, no watermarks, no subscriptions, and no internet connection required.',
  },
  {
    question: 'What can I import or export?',
    answer:
      'You can import images, image sequences, videos, and audio in various formats. You can also import multilayered SVGs either as a single image or as a full multilayered composition. For export, you can render videos, image sequences, or just the audio.',
  },
  {
    question: 'Can I import After Effects projects?',
    answer:
      "No, Animoia has its own project format. But if you're coming from After Effects, the layer based workflow, keyframes, and graph editor will feel familiar right away.",
  },
  {
    question: 'Does Animoia use the GPU?',
    answer:
      'Yes. Effects, previews, and rendering are all GPU accelerated, so most modern graphics cards will give you real time playback on typical compositions.',
  },
  {
    question: 'Where can I get help or report a bug?',
    answer:
      'Hop into the Discord (linked in the header) to ask questions, show off your work, or flag issues. Tutorials will get posted regularly on the YouTube channel too.',
  },
  {
    question: 'Can I use Animoia for commercial work?',
    answer:
      'Yes, of course. Anything you export from Animoia is yours, do whatever you want with it. You can always check the license page for the full details.',
  },
  {
    question: 'What makes Animoia reliable?',
    answer:
      "Once you install Animoia, you don't need a login or an internet connection for it to work. Everything runs locally on your machine using the algorithms built into the app. In other words, the version you have installed is yours to keep, and nothing can remotely take it away from you.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-[1080px] px-4 py-14 sm:px-6 md:py-20"
    >
      <Reveal>
        <h2
          id="faq-heading"
          className="font-display text-center text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px]"
        >
          You may be wondering...
        </h2>
      </Reveal>

      <ul className="mt-10 flex flex-col gap-4">
        {faqs.map((item, index) => (
          <Reveal as="li" key={item.question} delay={Math.min(index, 3) * 60}>
            <FaqItem {...item} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="rounded-[6px] border border-white/[0.09] bg-[#0f0f0f]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left text-[15px] text-neutral-100 transition-colors hover:text-white sm:text-[16px]"
      >
        <span>{question}</span>
        <span
          aria-hidden
          className="relative size-4 shrink-0 text-neutral-300 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [backface-visibility:hidden] [transform-origin:center] [will-change:transform]"
          style={{ transform: open ? 'rotate(90deg) translateZ(0)' : 'rotate(0deg) translateZ(0)' }}
        >
          <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-current" />
          <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-[13.5px] leading-[1.5] text-neutral-400">{answer}</p>
        </div>
      </div>
    </div>
  )
}
