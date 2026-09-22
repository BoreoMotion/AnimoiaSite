import { FeatureCard } from '@/components/feature-card'
import { Reveal } from '@/components/reveal'

const features = [
  {
    title: '120+ Effects',
    image: '/images/features/effects.jpg',
    alt: 'Strips of footage with different glitch, pixelate, and distortion effects applied',
    description:
      'Animoia ships with more than 120 built-in effects, from blurs, glows, and color tools to glitches, distortions, and stylized looks. You can put effects on layers or as an adjustment applied to everything below. Every effect is editable, fully keyframeable, and can be stacked and combined to build your own custom looks.',
  },
  {
    title: 'Tracking & Stabilization',
    image: '/images/features/tracking.jpg',
    alt: 'Aerial forest footage covered in colorful motion tracker boxes',
    description:
      'Animoia features built-in tracking and stabilization tools that let you track motion in your footage, attach elements to moving objects, and stabilize shaky shots for smoother results. With a professional tracking system designed to improve reliability and accuracy, you can integrate visual elements naturally.',
  },
  {
    title: 'Color Grading',
    image: '/images/features/color-grading.jpg',
    alt: 'Moody, warmly graded library interior with a fireplace and desk lamps',
    description:
      'Shape the mood of your footage with curves, levels, and color wheels. Grade individual layers or entire compositions, and preview every adjustment in real time so your colors land exactly where you want them. EXR raw layers are supported too!',
  },
  {
    title: 'Keyframes & Modifiers',
    image: '/images/features/keyframes.jpg',
    alt: 'Timeline showing colored layer bars with keyframe markers',
    description:
      'Animate anything with a fast, familiar timeline. Set keyframes on any property, adjust easing, and layer on modifiers like wiggle, loop, overshoot, audio reactivity, and much more to build complex motion without writing a single expression.',
  },
  {
    title: 'Text Animation',
    image: '/images/features/text-animation.png',
    alt: 'Japanese text on a dark banner over a blue floral pattern',
    description:
      'Bring any language typography to life with per-character animators, variable fonts, and full Unicode support. Animate position, scale, opacity, and color across letters or words, or make the text follow a path and combine animators for kinetic typography in seconds.',
  },
  {
    title: 'Graph Editor',
    image: '/images/features/graph-editor.jpg',
    alt: 'Graph editor with colored bezier animation curves',
    description:
      'Fine tune every motion with a full graph editor. Drag bezier handles, compare curves across properties, and sculpt value graphs so your animations feel exactly as smooth or as snappy as you intend, with a quick easing panel allowing you to ease multiple properties with the click of a button.',
  },
  {
    title: 'Pen Tool',
    image: '/images/features/pen-tool.png',
    alt: 'Handwritten word Paths drawn in a rainbow gradient stroke',
    description:
      'Draw masks, shapes, and motion paths right on the canvas with a pen tool that feels familiar. Animate strokes, trim paths, add tapers or gradients, then keyframe or modify the paths and masks just like any other property.',
  },
  {
    title: 'Puppet Pin',
    image: '/images/features/puppet-pin.jpg',
    alt: 'Cardboard horse cutout with a puppet deformation mesh overlaid',
    description:
      'Drop pins on any layer and bend, stretch, or deform it naturally. Puppet Pin builds a mesh around your artwork so characters and cutouts move with real, organic, keyframeable motion.',
  },
  {
    title: 'Rigid Bodies',
    image: '/images/features/rigid-bodies.png',
    alt: 'Simulated green circles piled inside a curved container',
    description:
      'Simulate real physics right inside your compositions. Give layers mass, bounce, and friction, add gravity and force fields, and let Animoia work out motion that would take hours to keyframe by hand.',
  },
]

export function FeaturesGrid() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto w-full max-w-[1080px] px-4 py-14 sm:px-6 md:py-20"
    >
      <Reveal>
        <h2
          id="features-heading"
          className="font-display text-center text-[34px] font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px]"
        >
          Everything you need to create.
        </h2>
      </Reveal>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} delay={(index % 3) * 90} />
        ))}
      </ul>
    </section>
  )
}
