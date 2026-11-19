export function AppPreview() {
  return (
    <section
      aria-label="Animoia application preview"
      className="mx-auto mt-6 w-full max-w-[1260px] px-4 sm:px-6 md:mt-7"
    >
      <div className="app-preview-enter relative z-50 overflow-hidden rounded-[10px] border border-white/10 bg-[#0b0b0b] shadow-[0_-10px_60px_-20px_rgba(0,0,0,0.8)]">
        {/* next/image is unoptimized in this project; reserve the aspect ratio
            via width/height to avoid layout shift while the image loads. */}
        <img
          draggable={false}
          data-intro-asset
          src="/images/animoia-app-1-2-5.png"
          alt="Animoia 1.2.5 editor showing glowing version text over blue and teal waves, with the effects panels and timeline visible"
          width={1919}
          height={1079}
          decoding="async"
          fetchPriority="high"
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
