const SIZES = '(max-width: 1260px) calc(100vw - 2rem), 1260px'

export function AppPreview() {
  return (
    <section
      aria-label="Animoia application preview"
      className="mx-auto mt-6 w-full max-w-[1260px] px-4 sm:px-6 md:mt-7"
    >
      <div className="app-preview-enter relative z-50 overflow-hidden rounded-[10px] border-2 border-white/10 bg-[#0b0b0d] shadow-[0_-10px_60px_-20px_rgba(0,0,0,0.8)]">
        {/* next/image is unoptimized in this project, so hand-encoded AVIF/WebP
            variants are served directly; the aspect ratio is reserved via
            width/height to avoid layout shift while the image loads. */}
        <picture>
          <source
            type="image/avif"
            srcSet="/images/animoia-app-1280.avif 1280w, /images/animoia-app-1918.avif 1918w"
            sizes={SIZES}
          />
          <source
            type="image/webp"
            srcSet="/images/animoia-app-1280.webp 1280w, /images/animoia-app-1918.webp 1918w"
            sizes={SIZES}
          />
          <img
            data-intro-asset
            src="/images/animoia-app-1918.webp"
            alt="Animoia editor showing a composition with a glass 'Nature' label and heart, the properties panel, effects browser, and timeline"
            width={1918}
            height={1079}
            decoding="async"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </picture>
      </div>
    </section>
  )
}
