export type Product = {
  slug: string
  title: string
  price: number
  image: string
  alt: string
  description: string
  category: string
  purchaseUrl: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'rigid-bodies',
    title: 'Rigid Bodies',
    price: 35,
    image: '/marketplace/rigid-bodies-wide.jpg',
    alt: 'Rigid Bodies in bold mint, teal, and green lettering on a textured dark poster with green stripes and sparkles',
    category: 'Plugin',
    purchaseUrl: 'https://boreo.gumroad.com/l/animoia-rigidbodies',
    description:
      'A physics simulation add-on for Animoia. Give layers mass, bounce, and friction, add gravity and collisions, and let the solver calculate believable motion that would take hours to keyframe by hand.',
  },
]

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
