import {
  LICENSE_CLOSING,
  LICENSE_INTRO,
  LICENSE_LAST_UPDATED,
  LICENSE_SECTIONS,
  type LicenseBlock,
} from '@/lib/license'

export function LicenseDocument() {
  return (
    <article className="mx-auto w-full max-w-[760px] px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-14">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <h1 className="font-display text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[46px]">
          Animoia End User License Agreement
        </h1>
        <p className="text-[14px] text-neutral-500">Last updated: {LICENSE_LAST_UPDATED}</p>
      </header>

      <div className="mt-8 flex flex-col gap-4">
        {LICENSE_INTRO.map((text) => (
          <p key={text} className="text-[15px] leading-[1.65] text-neutral-300">
            {text}
          </p>
        ))}
      </div>

      <nav aria-label="Sections" className="mt-10 rounded-[6px] border border-white/[0.09] bg-[#0f0f0f] p-5">
        <h2 className="font-display text-[15px] font-normal tracking-[-0.01em] text-neutral-200">Contents</h2>
        <ol className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {LICENSE_SECTIONS.map((section) => (
            <li key={section.number}>
              <a
                href={`#section-${section.number}`}
                className="text-[14px] text-neutral-500 transition-colors hover:text-neutral-200"
              >
                {section.number}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 flex flex-col gap-12">
        {LICENSE_SECTIONS.map((section) => (
          <section
            key={section.number}
            id={`section-${section.number}`}
            aria-labelledby={`section-${section.number}-heading`}
            className="scroll-mt-24"
          >
            <h2
              id={`section-${section.number}-heading`}
              className="font-display text-[24px] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-[28px]"
            >
              <span className="mr-3 text-neutral-500">{section.number}.</span>
              {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.blocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] leading-[1.6] text-neutral-500">
        {LICENSE_CLOSING.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </footer>
    </article>
  )
}

function Block({ block }: { block: LicenseBlock }) {
  if (block.type === 'list') {
    return (
      <ul className="flex flex-col gap-2.5 pl-5">
        {block.items.map((item) => (
          <li key={item} className="list-disc text-[15px] leading-[1.65] text-neutral-400 marker:text-neutral-600">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  return <p className="whitespace-pre-line text-[15px] leading-[1.65] text-neutral-400">{block.text}</p>
}
