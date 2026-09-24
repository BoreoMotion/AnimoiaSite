'use client'

import { useCallback, useEffect, useRef } from 'react'
import { GRAIN_SRC } from './grain-overlay'

export const RIPPLE_FILTER_ID = 'donation-displacement-ripple'

const MAX_RIPPLES = 4
const MAP_SIZE = 256
// Wave crest sits halfway out in the map, so a small starting radius puts the clicked button right on it.
const CREST = 0.5
const START_CREST_RADIUS = 48
const MAX_AMPLITUDE = 7
// Keeps the lens from folding over itself (magnification stays under ~1.4x).
const MAX_SLOPE = 0.28
const MAX_DURATION = 1400
// The visible ring element is 320px with its brightest band at 74% of its radius.
const RING_CREST_RADIUS = 160 * 0.74
// The glow's mask peaks at 70% of its half-width (see .donation-ripple-glow).
const GLOW_CREST = 0.7
// Glow strength of a full-power ($100) ripple; weaker ripples scale down from here.
const GLOW_INTENSITY = 0.28
// Fraction of a full-power ripple's life after which the grain brightening is fully gone.
// Smaller amounts fade sooner, so their glow stops at a smaller radius.
const GLOW_FADE_END = 0.45
const MIN_GLOW_REACH = 0.35
// The top ($100) ripple's glow lingers longer than the curve gives it, reaching a larger radius.
const TOP_GLOW_FADE_END = 0.65

const smoothstep = (t: number) => t * t * (3 - 2 * t)
const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1)

let cachedMap: string | null = null
let brightGrain: Promise<string | null> | null = null

// The page grain is mostly black with sparse specks. Baking a lifted, steepened copy once keeps black
// black and turns the specks white, so adding it only brightens the bright parts of the page grain,
// without running a CSS filter over a page-sized layer every frame.
function getBrightGrain(src: string) {
  brightGrain ??= new Promise<string | null>((resolve) => {
    const image = new Image()
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const context = canvas.getContext('2d')
      if (!context) return resolve(null)
      context.drawImage(image, 0, 0)
      const data = context.getImageData(0, 0, canvas.width, canvas.height)
      const px = data.data
      for (let i = 0; i < px.length; i += 4) {
        const lum = (px[i] + px[i + 1] + px[i + 2]) / 765
        const v = Math.round(255 * clamp01((lum * 2.2 - 0.5) * 1.8 + 0.5))
        px[i] = px[i + 1] = px[i + 2] = v
        px[i + 3] = 255
      }
      context.putImageData(data, 0, 0)
      canvas.toBlob((blob) => resolve(blob ? URL.createObjectURL(blob) : null))
    }
    image.onerror = () => resolve(null)
    image.src = src
  })
  return brightGrain
}

// RGB points toward the center so each pixel samples closer to it: content scales outward instead of
// sliding sideways. Alpha holds the wave profile, letting layers fade over a neutral grey base.
function getDisplacementMap() {
  if (cachedMap) return cachedMap
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = MAP_SIZE
  const context = canvas.getContext('2d')
  if (!context) return null

  const image = context.createImageData(MAP_SIZE, MAP_SIZE)
  const center = MAP_SIZE / 2
  for (let y = 0; y < MAP_SIZE; y++) {
    for (let x = 0; x < MAP_SIZE; x++) {
      const dx = (x + 0.5 - center) / center
      const dy = (y + 0.5 - center) / center
      const r = Math.hypot(dx, dy)
      const nx = r > 0 ? dx / r : 0
      const ny = r > 0 ? dy / r : 0
      const profile = r < 1 ? Math.sin(Math.PI * r) : 0
      const i = (y * MAP_SIZE + x) * 4
      image.data[i] = 128 - 127 * nx
      image.data[i + 1] = 128 - 127 * ny
      image.data[i + 2] = 128
      image.data[i + 3] = 255 * profile
    }
  }
  context.putImageData(image, 0, 0)
  cachedMap = canvas.toDataURL()
  return cachedMap
}

type Ripple = {
  start: number
  duration: number
  cx: number
  cy: number
  endRadius: number
  amplitude: number
  ring: HTMLDivElement
  glow: HTMLDivElement | null
  glowIntensity: number
  glowFadeEnd: number
}

type Layer = {
  image: SVGFEImageElement
  fade: SVGFEComponentTransferElement
  alpha: SVGFEFuncAElement
}

const SVG_NS = 'http://www.w3.org/2000/svg'

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string>) {
  const el = document.createElementNS(SVG_NS, tag)
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
  return el
}

function removeRipple(ripple: Ripple) {
  ripple.ring.remove()
  ripple.glow?.remove()
}

function setBox(el: SVGElement, x: number, y: number, size: number) {
  el.setAttribute('x', x.toFixed(1))
  el.setAttribute('y', y.toFixed(1))
  el.setAttribute('width', size.toFixed(1))
  el.setAttribute('height', size.toFixed(1))
}

export function useDisplacementRipple() {
  const contentRef = useRef<HTMLDivElement>(null)
  const rippleLayerRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<SVGFilterElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)
  const brightGrainUrlRef = useRef<string | null>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const layersRef = useRef<Layer[]>([])
  const frameRef = useRef(0)

  const buildLayers = useCallback(() => {
    const filter = filterRef.current
    const map = getDisplacementMap()
    if (!filter || !map) return false
    const merge = svg('feMerge', { result: 'map' })
    merge.append(svg('feMergeNode', { in: 'neutral' }))
    filter.replaceChildren(svg('feFlood', { 'flood-color': 'rgb(128,128,128)', result: 'neutral' }))
    const layers: Layer[] = []
    for (let i = 0; i < MAX_RIPPLES; i++) {
      const image = svg('feImage', { href: map, preserveAspectRatio: 'none', result: `wave${i}` })
      const alpha = svg('feFuncA', { type: 'linear', slope: '0' })
      const fade = svg('feComponentTransfer', { in: `wave${i}`, result: `layer${i}` })
      fade.append(alpha)
      filter.append(image, fade)
      merge.append(svg('feMergeNode', { in: `layer${i}` }))
      layers.push({ image, fade, alpha })
    }
    filter.append(
      merge,
      svg('feDisplacementMap', {
        in: 'SourceGraphic',
        in2: 'map',
        scale: String(MAX_AMPLITUDE * 2),
        xChannelSelector: 'R',
        yChannelSelector: 'G',
      }),
    )
    layersRef.current = layers
    return true
  }, [])

  const clearDisplacement = useCallback(() => {
    if (contentRef.current) contentRef.current.style.filter = ''
  }, [])

  const stop = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    frameRef.current = 0
    for (const ripple of ripplesRef.current) removeRipple(ripple)
    ripplesRef.current = []
    clearDisplacement()
  }, [clearDisplacement])

  useEffect(() => stop, [stop])

  // Build and decode the wave map ahead of the first click so the filter never waits on it.
  useEffect(() => {
    getBrightGrain(GRAIN_SRC).then((url) => {
      brightGrainUrlRef.current = url
    })
    if (!buildLayers()) return
    const map = getDisplacementMap()
    if (!map) return
    const image = new Image()
    image.src = map
    image.decode().catch(() => {})
  }, [buildLayers])

  const tick = useCallback(
    (now: number) => {
      const content = contentRef.current
      const filter = filterRef.current
      const layer = rippleLayerRef.current
      if (!content || !filter || !layer) return stop()

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        const done = now - ripple.start >= ripple.duration
        if (done) removeRipple(ripple)
        return !done
      })
      const ripples = ripplesRef.current
      if (ripples.length === 0) return stop()

      const contentRect = content.getBoundingClientRect()
      const layerRect = layer.getBoundingClientRect()
      const grainRect = ripples.some((ripple) => ripple.glow) ? grainRef.current?.getBoundingClientRect() : undefined
      let displacing = false

      ripples.forEach((ripple, i) => {
        const t = clamp01((now - ripple.start) / ripple.duration)
        const grow = 1 - (1 - t) ** 2.2
        const crestRadius = START_CREST_RADIUS + (ripple.endRadius - START_CREST_RADIUS) * grow
        const mapRadius = crestRadius / CREST
        const fade = smoothstep(clamp01(t / 0.06)) * (1 - t) ** 1.6
        const amplitude = Math.min(ripple.amplitude, (MAX_SLOPE * mapRadius) / Math.PI) * fade

        const layerData = layersRef.current[i]
        if (layerData) {
          const x = ripple.cx - contentRect.left - mapRadius
          const y = ripple.cy - contentRect.top - mapRadius
          setBox(layerData.image, x, y, mapRadius * 2)
          setBox(layerData.fade, x, y, mapRadius * 2)
          layerData.alpha.setAttribute('slope', (amplitude / MAX_AMPLITUDE).toFixed(3))
          if (amplitude > 0.25) displacing = true
        }

        const ringScale = crestRadius / RING_CREST_RADIUS
        const opacity = (smoothstep(clamp01(t / 0.08)) * (1 - t) ** 1.2).toFixed(3)
        const centerX = ripple.cx - layerRect.left
        const centerY = ripple.cy - layerRect.top
        ripple.ring.style.transform = `translate3d(${centerX}px, ${centerY}px, 0) translate(-50%, -50%) scale(${ringScale.toFixed(4)})`
        ripple.ring.style.opacity = opacity

        // The glow shares the page grain's exact box and texture; only its mask moves, so the
        // brightened specks are always the page's own specks.
        if (ripple.glow && grainRect) {
          const half = crestRadius / GLOW_CREST
          const size = `${(half * 2).toFixed(1)}px`
          const position = `${(ripple.cx - grainRect.left - half).toFixed(1)}px ${(ripple.cy - grainRect.top - half).toFixed(1)}px`
          const clip = `inset(${layerRect.top - grainRect.top}px ${grainRect.right - layerRect.right}px ${grainRect.bottom - layerRect.bottom}px ${layerRect.left - grainRect.left}px)`
          const style = ripple.glow.style
          style.maskSize = style.webkitMaskSize = `${size} ${size}`
          style.maskPosition = style.webkitMaskPosition = position
          style.clipPath = clip
          style.opacity = (ripple.glowIntensity * smoothstep(clamp01(t / 0.06)) * (1 - clamp01(t / ripple.glowFadeEnd)) ** 2).toFixed(3)
        }
      })
      for (let i = ripples.length; i < layersRef.current.length; i++) {
        layersRef.current[i].alpha.setAttribute('slope', '0')
      }

      if (displacing) {
        // The filter region clips the element, so it must cover all visible content (not just the waves),
        // otherwise everything outside a small starting wave vanishes for a frame.
        const left = Math.max(-contentRect.left, 0)
        const top = Math.max(-contentRect.top, 0)
        const right = Math.min(window.innerWidth - contentRect.left, contentRect.width)
        const bottom = Math.min(window.innerHeight - contentRect.top, contentRect.height)
        if (right > left && bottom > top) {
          setBox(filter, Math.floor(left), Math.floor(top), 0)
          filter.setAttribute('width', String(Math.ceil(right - left) + 1))
          filter.setAttribute('height', String(Math.ceil(bottom - top) + 1))
          if (!content.style.filter) content.style.filter = `url(#${RIPPLE_FILTER_ID})`
        } else clearDisplacement()
      } else clearDisplacement()

      frameRef.current = requestAnimationFrame(tick)
    },
    [stop, clearDisplacement],
  )

  const play = useCallback(
    (clientX: number, clientY: number, power = 0.5) => {
      const layer = rippleLayerRef.current
      if (!layer || !contentRef.current) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (layersRef.current.length !== MAX_RIPPLES && !buildLayers()) return

      const rect = layer.getBoundingClientRect()
      const endRadius =
        Math.hypot(
          Math.max(clientX - rect.left, rect.right - clientX),
          Math.max(clientY - rect.top, rect.bottom - clientY),
        ) + 60
      const p = clamp01(power)

      const oldest = ripplesRef.current.length >= MAX_RIPPLES ? ripplesRef.current.shift() : undefined
      if (oldest) removeRipple(oldest)
      const ring = document.createElement('div')
      ring.className = 'donation-ripple donation-ripple--highlight'
      layer.append(ring)
      let glow: HTMLDivElement | null = null
      const grain = grainRef.current
      if (grain?.parentElement) {
        glow = document.createElement('div')
        glow.className = 'donation-ripple-glow'
        const bright = brightGrainUrlRef.current
        glow.style.backgroundImage = `url('${bright ?? GRAIN_SRC}')`
        if (!bright) glow.style.filter = 'grayscale(1) brightness(2.2) contrast(1.8)'
        grain.after(glow)
      }

      ripplesRef.current.push({
        start: performance.now(),
        duration: MAX_DURATION,
        cx: clientX,
        cy: clientY,
        endRadius,
        amplitude: MAX_AMPLITUDE * (0.55 + 0.45 * p),
        ring,
        glow,
        glowIntensity: GLOW_INTENSITY * p * p,
        glowFadeEnd: p >= 1 ? TOP_GLOW_FADE_END : GLOW_FADE_END * (MIN_GLOW_REACH + (1 - MIN_GLOW_REACH) * p),
      })

      if (!frameRef.current) frameRef.current = requestAnimationFrame(tick)
    },
    [buildLayers, tick],
  )

  return { contentRef, rippleLayerRef, filterRef, grainRef, play }
}
