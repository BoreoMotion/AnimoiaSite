'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Plug } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { formatPrice, type Product } from '@/lib/marketplace'

type ProductCardProps = Product & {
  delay?: number
}

export function ProductCard({ slug, title, price, image, alt, description, category, delay = 0 }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Reveal
      as="li"
      delay={delay}
      ready={imageLoaded}
      className="flex flex-col overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#0f0f0f] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition-[opacity,transform,filter,border-color] has-[a:hover]:border-white/[0.14]"
    >
      <Link
        href={`/marketplace/${slug}`}
        className="group flex flex-1 flex-col rounded-[12px] outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-inset"
      >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          draggable={false}
          src={image}
          alt={alt}
          fill
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
        <Pill><Plug className="size-3" aria-hidden="true" />{category}</Pill>
        <div className="mt-2.5 flex items-start justify-between gap-3">
          <h3 className="font-display text-[22px] font-normal leading-[0.9] tracking-[-0.03em] text-white sm:text-[25px]">
            {title}
          </h3>
          <span className="shrink-0 font-display text-[22px] font-normal leading-[0.9] tracking-[-0.03em] text-neutral-400 sm:text-[25px]">
            {formatPrice(price)}
          </span>
        </div>
        <p className="mt-2.5 text-[12px] leading-[1.4] text-neutral-400">{description}</p>
      </div>
      </Link>
    </Reveal>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-black">{children}</span>
  )
}
