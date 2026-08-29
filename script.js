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

const downloadMenus = [...document.querySelectorAll('.download-menu')]
  .map(menu => {
    const toggle = menu.querySelector('[aria-haspopup="true"]')
    const options = toggle && document.getElementById(toggle.getAttribute('aria-controls'))
    return toggle && options ? { toggle, options } : null
  })
  .filter(Boolean)

const setMenuOpen = (entry, open) => {
  entry.toggle.setAttribute('aria-expanded', String(open))
  entry.options.hidden = !open
}

const closeAllMenus = except => {
  for (const entry of downloadMenus) if (entry !== except) setMenuOpen(entry, false)
}

if (downloadMenus.length) {
  for (const entry of downloadMenus) {
    entry.toggle.addEventListener('click', event => {
      event.stopPropagation()
      const willOpen = entry.options.hidden
      closeAllMenus(entry)
      setMenuOpen(entry, willOpen)
    })

    // downloads stay on the page, so dismiss the menu once a choice is made
    entry.options.addEventListener('click', event => {
      if (event.target.closest('.download-option')) setMenuOpen(entry, false)
    })
  }

  document.addEventListener('click', event => {
    if (!event.target.closest('.download-menu')) closeAllMenus()
  })

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return
    const open = downloadMenus.find(entry => !entry.options.hidden)
    if (open) {
      setMenuOpen(open, false)
      open.toggle.focus()
    }
  })
}

const heroDefault = document.querySelector('.hero-default')
const downloadLinks = document.querySelector('.download-links')
const heroThanks = document.querySelector('.hero-thanks')

if (heroDefault && downloadLinks && heroThanks) {
  const thanksPlatform = heroThanks.querySelector('.thanks-platform')
  const thanksManual = heroThanks.querySelector('.thanks-manual')
  const thanksHeading = heroThanks.querySelector('.thanks-title')
  const thanksBack = heroThanks.querySelector('.thanks-back')

  // both panels stay in the layout and crossfade, so the swap is driven by a
  // class rather than [hidden] — display:none would skip the transition
  const swap = (out, into) => {
    out.classList.add('is-inactive')
    into.classList.remove('is-inactive')
  }

  const showThanks = link => {
    thanksManual.href = link.href
    thanksPlatform.textContent = link.dataset.platform
    closeAllMenus()
    swap(heroDefault, heroThanks)
    requestAnimationFrame(() => thanksHeading.focus())
  }

  const showDownloads = () => {
    swap(heroThanks, heroDefault)
  }

  for (const link of downloadLinks.querySelectorAll('a[data-platform]')) {
    // the file is served as an attachment, so the page stays put: let the
    // default click through and just swap the panel alongside it
    link.addEventListener('click', () => showThanks(link))
  }

  thanksBack.addEventListener('click', showDownloads)
}
