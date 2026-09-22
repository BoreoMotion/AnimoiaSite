import { RELEASES, type Release, type ReleaseAsset } from '@/lib/changelog'

export function ChangelogReleases() {
  return (
    <div className="mx-auto w-full max-w-[880px] px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-14">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <h1 className="font-display text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[46px]">
          Releases
        </h1>
      </header>

      <nav aria-label="Versions" className="mt-8 flex flex-wrap gap-2">
        {RELEASES.map((release) => (
          <a
            key={release.tag}
            href={`#${release.tag}`}
            className="rounded-[3px] border border-white/[0.09] bg-[#0f0f10] px-3 py-1.5 font-mono text-[13px] text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
          >
            {release.tag}
          </a>
        ))}
      </nav>

      <ol className="mt-10 flex flex-col gap-8">
        {RELEASES.map((release) => (
          <ReleaseEntry key={release.tag} release={release} />
        ))}
      </ol>
    </div>
  )
}

function ReleaseEntry({ release }: { release: Release }) {
  const headingId = `${release.tag}-heading`

  return (
    <li id={release.tag} className="scroll-mt-24">
      <article aria-labelledby={headingId} className="rounded-[6px] border border-white/[0.09] bg-[#0f0f10]">
        <div className="flex flex-col gap-3 px-6 py-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-neutral-500">
            {release.latest ? <Pill>Latest</Pill> : null}
            {release.initial ? <Pill>Initial release</Pill> : null}
            <time dateTime={release.isoDate}>{release.date}</time>
          </div>
          <h2
            id={headingId}
            className="font-display text-[28px] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-[32px]"
          >
            {release.title}
          </h2>
          {release.summary ? <p className="text-[15px] leading-[1.65] text-neutral-400">{release.summary}</p> : null}
        </div>

        {release.sections.length > 0 ? <Notes release={release} /> : null}
        {release.assets.length > 0 ? <Assets release={release} /> : null}
      </article>
    </li>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-black">{children}</span>
  )
}

function Notes({ release }: { release: Release }) {
  return (
    <details className="group border-t border-white/[0.07]">
      <summary className="flex cursor-pointer select-none items-center gap-2 px-6 py-4 text-[14px] text-neutral-300 transition-colors hover:text-white sm:px-8 [&::-webkit-details-marker]:hidden">
        <ChevronIcon />
        Full changelog
      </summary>
      <div className="flex flex-col gap-9 border-t border-white/[0.07] px-6 py-7 sm:px-8">
        {release.sections.map((section) => (
          <section key={section.title} aria-label={section.title}>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-neutral-100">{section.title}</h3>
            <ul className="mt-3 flex flex-col gap-2 pl-5">
              {section.items.map((item) => (
                <li key={item} className="list-disc text-[14.5px] leading-[1.65] text-neutral-400 marker:text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </details>
  )
}

function Assets({ release }: { release: Release }) {
  const hasLinks = release.assets.some((asset) => asset.href)

  return (
    <details open className="group border-t border-white/[0.07]">
      <summary className="flex cursor-pointer select-none items-center gap-2 px-6 py-4 text-[14px] text-neutral-300 transition-colors hover:text-white sm:px-8 [&::-webkit-details-marker]:hidden">
        <ChevronIcon />
        Downloads
      </summary>
      <div className="border-t border-white/[0.07]">
        {!hasLinks ? (
          <p className="border-b border-white/[0.07] px-6 py-3 text-[13px] text-neutral-500 sm:px-8">
            Download links coming soon.
          </p>
        ) : null}
        <ul className="flex flex-col divide-y divide-white/[0.07]">
          {release.assets.map((asset) => (
            <AssetRow key={asset.name} asset={asset} />
          ))}
        </ul>
      </div>
    </details>
  )
}

function AssetRow({ asset }: { asset: ReleaseAsset }) {
  const nameClass = asset.href
    ? 'truncate font-mono text-[13.5px] text-neutral-200 transition-colors hover:text-white hover:underline'
    : 'truncate font-mono text-[13.5px] text-neutral-500'

  return (
    <li className="flex flex-col gap-2 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {asset.href ? (
          <a href={asset.href} className={nameClass} download>
            {asset.name}
          </a>
        ) : (
          <span className={nameClass}>{asset.name}</span>
        )}
        <span className="text-[12px] text-neutral-500">{asset.platform}</span>
      </div>
      <p className="flex shrink-0 items-center gap-2 text-[12px] text-neutral-500">
        <span className="uppercase tracking-[0.08em]">sha256</span>
        <code className="font-mono text-neutral-600" title={asset.sha256}>
          {asset.sha256.slice(0, 12)}…{asset.sha256.slice(-12)}
        </code>
      </p>
    </li>
  )
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className="size-[12px] text-neutral-600 transition-transform group-open:rotate-90"
    >
      <path d="m6 3.5 4.5 4.5L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
