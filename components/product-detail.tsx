import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Plug } from 'lucide-react'
import { ProductGallery } from '@/components/product-gallery'
import { formatPrice, type Product } from '@/lib/marketplace'

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article
      aria-labelledby="product-heading"
      className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col px-4 pb-16 pt-8 sm:px-6 md:pt-12"
    >
      <Link
        href="/marketplace"
        className="inline-flex w-fit items-center gap-1.5 rounded-sm text-[13px] text-neutral-400 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        Marketplace
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <ProductGallery media={product.media} />

        <aside className="flex flex-col lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-black">
            <Plug className="size-3" aria-hidden="true" />
            {product.category}
          </span>
          <h1
            id="product-heading"
            className="mt-3 font-display text-[40px] font-normal leading-[0.9] tracking-[-0.03em] text-white sm:text-[48px]"
          >
            {product.title}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.55] text-neutral-300">{product.tagline}</p>

          <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
            <span className="text-[13px] text-neutral-500">One-time price</span>
            <span className="font-display text-[34px] font-normal leading-[0.9] tracking-[-0.03em] text-white">
              {formatPrice(product.price)}
            </span>
          </div>

          <a
            href={product.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-white text-[15px] font-medium text-black outline-none transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            Purchase
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens Gumroad checkout in a new tab)</span>
          </a>
          <p className="mt-3 text-center text-[12px] text-neutral-500">Secure checkout through Gumroad</p>

          <dl className="mt-8 flex flex-col border-t border-white/10">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 border-b border-white/[0.06] py-3 text-[13px]">
                <dt className="text-neutral-500">{spec.label}</dt>
                <dd className="text-neutral-200">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section aria-labelledby="overview-heading" className="mt-16 border-t border-white/10 pt-10">
        <h2
          id="overview-heading"
          className="font-display text-[28px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[34px]"
        >
          Overview
        </h2>
        <p className="mt-4 max-w-[640px] text-[15px] leading-[1.6] text-neutral-400">{product.description}</p>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature.title} className="rounded-[12px] border border-white/[0.06] bg-[#0f0f0f] p-5">
              <h3 className="text-[15px] font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-neutral-400">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
