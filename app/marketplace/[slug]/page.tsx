import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GrainOverlay } from '@/components/grain-overlay'
import { ProductDetail } from '@/components/product-detail'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProduct, PRODUCTS } from '@/lib/marketplace'

export const dynamicParams = false

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps<'/marketplace/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.title} | Animoia Marketplace`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: PageProps<'/marketplace/[slug]'>) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <GrainOverlay />
        <ProductDetail product={product} />
      </main>
      <SiteFooter />
    </div>
  )
}
