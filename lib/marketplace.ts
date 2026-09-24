export type Product = {
  slug: string
  title: string
  price: number
  image: string
  alt: string
  description: string
  category: string
  purchaseUrl: string
  tagline: string
  media: ProductMedia[]
  features: { title: string; description: string }[]
  specs: { label: string; value: string }[]
}

export type ProductMedia =
  | { type: 'video'; src: string; webmSrc?: string; poster?: string; label: string }
  | { type: 'image'; src: string; alt: string; label: string; width: number; height: number }

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug)
}

export const PRODUCTS: Product[] = [
  {
    slug: 'rigid-bodies',
    title: 'Rigid Bodies',
    price: 35,
    image: '/marketplace/rigid-bodies-cover.jpg',
    alt: 'Rigid Bodies in bold mint, teal, and green lettering on a dark dotted background with sparkles and the Animoia logo',
    category: 'Plugin',
    purchaseUrl: 'https://boreo.gumroad.com/l/animoia-rigidbodies?wanted=true',
    description:
      'A physics simulation add-on for Animoia. Give layers mass, bounce, and friction, add gravity and collisions, and let the solver calculate believable motion that would take hours to keyframe by hand.',
    tagline: 'Believable physics for your layers, solved in seconds instead of keyframed for hours.',
    media: [
      {
        type: 'image',
        src: '/marketplace/rigid-bodies-cover.jpg',
        alt: 'Rigid Bodies in bold mint, teal, and green lettering on a dark dotted background with sparkles and the Animoia logo',
        label: 'Cover',
        width: 1080,
        height: 608,
      },
      {
        type: 'video',
        src: '/marketplace/rigid-bodies-popcorn.mp4',
        poster: '/marketplace/rigid-bodies-popcorn-thumbnail.jpg',
        label: 'Popcorn simulation',
      },
      {
        type: 'image',
        src: '/marketplace/rigid-bodies-simulation.png',
        alt: 'The Rigid Body Simulation panel in Animoia showing a cue stick, a cue ball, and a rack of colored balls surrounded by magnet force fields, with body, field, and magnet settings in the sidebar',
        label: 'Simulation panel',
        width: 1919,
        height: 1079,
      },
    ],
    features: [
      {
        title: 'Active and passive bodies',
        description:
          'Turn any layer into a body with mass, bounce, and friction. Passive bodies act as walls, floors, and colliders that stay put.',
      },
      {
        title: 'Force fields and magnets',
        description:
          'Attract or repel bodies with adjustable radius, core, capture, and falloff to pull motion exactly where you want it.',
      },
      {
        title: 'World controls',
        description:
          'Set gravity, substeps, and bounds for the whole scene, then scrub the timeline to preview the solve frame by frame.',
      },
      {
        title: 'Bake to keyframes',
        description:
          'Bake solved frames or the full range into regular keyframes you can edit, retime, and hand off like any other animation.',
      },
    ],
    specs: [
      { label: 'Type', value: 'Plugin' },
      { label: 'Requires', value: 'Animoia 1.1.0+' },
      { label: 'License', value: 'One-time purchase' },
      { label: 'Delivery', value: 'Activation Key (2 devices)' },
    ],
  },
]

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
