import { ProductCard } from '@/components/product-card'
import { PRODUCTS } from '@/lib/marketplace'

export function MarketplaceGrid() {
  return (
    <section
      id="marketplace"
      aria-labelledby="marketplace-heading"
      className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col px-4 pb-8 pt-10 sm:px-6 md:pt-14"
    >
      <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <h1
          id="marketplace-heading"
          className="font-display text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[46px]"
        >
          Marketplace
        </h1>
        <p className="max-w-[520px] text-[15px] leading-[1.6] text-neutral-400">
          Add-ons, effects, and tools built for Animoia. Buy once, own it forever.
        </p>
      </header>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 [&>li:only-child]:w-full [&>li:only-child]:max-w-[340px]">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={product.slug} {...product} delay={(index % 3) * 90} />
        ))}
      </ul>
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
