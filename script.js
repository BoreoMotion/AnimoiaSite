document.addEventListener('dragstart', event => event.preventDefault())

const featureRows = [
  [
    'Parenting', 'Stencils', 'Masks', 'Mesh Warp', 'Puppet Pin',
    'Tracking', 'Easing Graph', 'Audio Effects', 'Text Animations',
    'Keyframes', 'Blend Modes', 'Color Grading', 'Shape Layers',
    'Expressions', 'Motion Blur'
  ],
  [
    'Camera Lens Blur', 'Turbulence', 'Gaussian Blur', 'Displacement Map',
    'Ghosts', 'Curves', 'Color Correction', 'Tint', 'Sand',
    'Animate by Letter', 'Chroma Key', 'Offset Path', 'Trim Path',
    'Corner Pin', 'Unsharp Mask', 'Tracking'
  ]
]

function shuffle(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const speed = 0.028
const ticker = document.querySelector('.ticker-shell')
const rows = [...document.querySelectorAll('.ticker-track')]
let paused = false

rows.forEach((track, index) => {
  const order = shuffle(featureRows[index] || featureRows[0])
  for (const feature of [...order, ...order]) {
    const pill = document.createElement('span')
    pill.className = 'feature-pill'
    pill.textContent = feature
    track.appendChild(pill)
  }
})

ticker.addEventListener('pointerover', event => {
  paused = Boolean(event.target.closest('.feature-pill'))
})
ticker.addEventListener('pointerleave', () => { paused = false })

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // start each row at a random point along its loop, not always at the seam
  const states = rows.map(track => {
    const half = track.scrollWidth / 2
    return { offset: half > 0 ? -Math.random() * half : 0, speed: 0, last: 0 }
  })

  function animate(time) {
    rows.forEach((track, index) => {
      const state = states[index]
      const delta = Math.min(time - (state.last || time), 34)
      state.last = time
      const reverse = track.dataset.direction === 'reverse'
      const target = paused ? 0 : reverse ? speed : -speed
      state.speed += (target - state.speed) * Math.min(1, delta / (paused ? 90 : 420))
      state.offset += state.speed * delta
      const half = track.scrollWidth / 2

      if (half > 0) {
        if (state.offset <= -half) state.offset += half
        if (state.offset >= 0) state.offset -= half
        track.style.transform = `translate3d(${state.offset}px, 0, 0)`
      }
    })
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

const linuxToggle = document.getElementById('linux-toggle')
const linuxOptions = document.getElementById('linux-options')

if (linuxToggle && linuxOptions) {
  const setOpen = open => {
    linuxToggle.setAttribute('aria-expanded', String(open))
    linuxOptions.hidden = !open
  }

  linuxToggle.addEventListener('click', event => {
    event.stopPropagation()
    setOpen(linuxOptions.hidden)
  })

  document.addEventListener('click', event => {
    if (!linuxOptions.hidden && !event.target.closest('.download-menu')) setOpen(false)
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !linuxOptions.hidden) {
      setOpen(false)
      linuxToggle.focus()
    }
  })
}
