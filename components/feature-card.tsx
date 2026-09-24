'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'

type FeatureCardProps = {
  title: string
  image: string
  alt: string
  description: string
  delay?: number
}

export function FeatureCard({ title, image, alt, description, delay = 0 }: FeatureCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Reveal
      as="li"
      delay={delay}
      ready={imageLoaded}
      className="flex flex-col overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#0f0f0f] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
    >
      <div className="relative aspect-[800/350] w-full overflow-hidden">
        <Image
          draggable={false}
          src={image}
          alt={alt}
          fill
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <h3 className="font-display text-[24px] font-normal leading-[0.9] tracking-[-0.03em] text-white sm:text-[27px]">
          {title}
        </h3>
        <p className="mt-3 text-[12.5px] leading-[1.4] text-neutral-400">{description}</p>
      </div>
    </Reveal>
  )
}
