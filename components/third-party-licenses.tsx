import { Fragment } from 'react'
import Link from 'next/link'
import { LicenseControls } from '@/components/license-controls'
import document from '@/lib/third-party-licenses.json'

type InlinePart = { text: string; href?: string }

type ComponentLicense = {
  id: string
  name: string
  version: string
  license: string
  metadata: { label: string; value: InlinePart[] }[]
  notices: InlinePart[][]
  texts: { label: string; text: string }[]
}

function InlineText({ parts }: { parts: InlinePart[] }) {
  return parts.map((part, index) => {
    if (!part.href) return <Fragment key={index}>{part.text}</Fragment>

    const className = 'break-words text-neutral-200 underline underline-offset-4 transition-colors hover:text-white [overflow-wrap:anywhere]'
    if (part.href.startsWith('/')) {
      return <Link key={index} href={part.href} className={className}>{part.text}</Link>
    }
    return <a key={index} href={part.href} rel="noopener noreferrer" className={className}>{part.text}</a>
  })
}

function LicenseDisclosure({ component }: { component: ComponentLicense }) {
  return (
    <details id={component.id} className="group min-w-0 scroll-mt-24 border-t border-white/10 last:border-b">
      <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-3 gap-y-1 rounded-sm py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="w-3 shrink-0 font-mono text-neutral-500">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
        <span className="min-w-0 break-words text-[15px] font-medium text-neutral-200 [overflow-wrap:anywhere]">{component.name}</span>
        <span className="break-words font-mono text-[12px] text-neutral-500 [overflow-wrap:anywhere]">{component.version}</span>
        <span className="ml-auto text-[12px] text-neutral-500">{component.license}</span>
      </summary>
      <div className="flex min-w-0 flex-col gap-4 pb-6 pl-6">
        <dl className="flex flex-col gap-2 text-[13px] leading-relaxed">
          {component.metadata.map((field, index) => (
            <div key={index} className="grid min-w-0 gap-1 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-4">
              <dt className="text-neutral-500">{field.label}</dt>
              <dd className="min-w-0 break-words text-neutral-400 [overflow-wrap:anywhere]"><InlineText parts={field.value} /></dd>
            </div>
          ))}
        </dl>
        {component.notices.map((notice, index) => (
          <p key={index} className="text-[14px] leading-[1.65] text-neutral-400"><InlineText parts={notice} /></p>
        ))}
        {component.texts.map((text, index) => (
          <pre
            key={index}
            aria-label={`${component.name}: ${text.label}`}
            tabIndex={0}
            data-lenis-prevent
            className="max-h-[420px] overflow-auto whitespace-pre-wrap break-words rounded-[6px] border border-white/10 bg-[#101010] p-4 font-mono text-[12px] leading-[1.6] text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [overflow-wrap:anywhere]"
          >
            {text.text}
          </pre>
        ))}
      </div>
    </details>
  )
}

export function ThirdPartyLicenses() {
  return (
    <article className="mx-auto w-full max-w-[860px] px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-14">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <h1 className="font-display text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[46px]">Third-Party Licenses</h1>
        <p className="text-[14px] text-neutral-500">Animoia {document.version} · Last updated: {document.lastUpdated}</p>
      </header>
      <div className="mt-8 flex flex-col gap-4">
        {document.intro.map((paragraph, index) => (
          <p key={index} className="text-[15px] leading-[1.65] text-neutral-300"><InlineText parts={paragraph} /></p>
        ))}
      </div>
      <nav aria-label="License categories" className="mt-10 rounded-[6px] border border-white/[0.09] bg-[#0f0f0f] p-5">
        <h2 className="font-display text-[15px] font-normal text-neutral-200">Contents</h2>
        <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {document.categories.map((category) => (
            <li key={category.id}>
              <a href={`#${category.id}`} className="text-[14px] text-neutral-500 transition-colors hover:text-neutral-200">
                {category.title} ({category.components.length})
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LicenseControls>
        {document.categories.map((category) => (
          <section key={category.id} aria-labelledby={category.id} className="min-w-0">
            <h2 id={category.id} className="mb-5 scroll-mt-24 font-display text-[24px] font-normal leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
              {category.title} <span className="ml-2 font-sans text-[14px] tracking-normal text-neutral-500">({category.components.length})</span>
            </h2>
            {category.components.map((component) => <LicenseDisclosure key={component.id} component={component} />)}
          </section>
        ))}
      </LicenseControls>
    </article>
  )
}
