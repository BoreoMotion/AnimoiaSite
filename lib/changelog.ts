export const SHA256_PLACEHOLDER = '0000000000000000000000000000000000000000000000000000000000000000'

export type ReleaseAsset = {
  name: string
  platform: string
  /** Direct download URL. `null` while the build is not published yet. */
  href: string | null
  sha256: string
}

export type ReleaseSection = {
  title: string
  items: string[]
}

export type Release = {
  version: string
  tag: string
  title: string
  date: string
  isoDate: string
  latest?: boolean
  initial?: boolean
  summary?: string
  sections: ReleaseSection[]
  assets: ReleaseAsset[]
}

const RELEASES_URL = 'https://github.com/BoreoMotion/AnimoiaReleases/releases'

export const CHANGELOG_GITHUB_URL = RELEASES_URL

export type AssetKey = 'windows' | 'macArm64' | 'macX64' | 'appImage' | 'deb'

export type AssetChecksums = Record<AssetKey, string>

export const SHA256_1_0_0: AssetChecksums = {
  windows: 'cca930b7d4f9a451d1be0cdcf6e186a14af2231a1057af5b4178b327b163bcab',
  macArm64: 'b0f08235aa66748f209a170bcaa0be7d1c598f6153751db3c9fb71fcb9ee7808',
  macX64: 'c4592e20fedc33e72574469c4016573313a40bfca6fbe095f1eb76db3d3b8931',
  appImage: 'f0735bc05d9ebf48bce6168a5cea27b27c60b1a6c3bf35ab64c2220c7e330b58',
  deb: '3fbe0f7e988e5e2ffdc089b6deeabdbcee47893b815951f488bb655271458bee',
}

export const SHA256_1_1_0: AssetChecksums = {
  windows: '91be61364b749f33a63d7c7aad90ee1f5220d09bd1b55cfd2a16a9c35c5227ff',
  macArm64: '585986915b9233948ed6f1eca5dc1e93c554de82009eebec61764ef5272275ff',
  macX64: 'ff0ab52809d0c4e1c5d3d244ba6c0dc1b268d3b862041f5889e53cee06b6c9af',
  appImage: '314a39f69821455a1af0e20094c2de13bad68fe6579e788d7f3b43d03b349adf',
  deb: '5e4fe95f4dd9028d1d6425149ec27e40505b542baff3819d6f16a7ca05829189',
}

/** GitHub release download base for the current version (tag has no "v" prefix). */
export const LATEST_RELEASE_BASE = `${RELEASES_URL}/download/1.1.0`

const NO_CHECKSUMS: AssetChecksums = {
  windows: SHA256_PLACEHOLDER,
  macArm64: SHA256_PLACEHOLDER,
  macX64: SHA256_PLACEHOLDER,
  appImage: SHA256_PLACEHOLDER,
  deb: SHA256_PLACEHOLDER,
}

function assetsFor(version: string, base: string | null, sha: AssetChecksums = NO_CHECKSUMS): ReleaseAsset[] {
  const file = (suffix: string) => (base ? `${base}/animoia-${version}-${suffix}` : null)
  return [
    { name: `animoia-${version}-windows.exe`, platform: 'Windows', href: file('windows.exe'), sha256: sha.windows },
    { name: `animoia-${version}-macOS-arm64.dmg`, platform: 'macOS (Apple Silicon)', href: file('macOS-arm64.dmg'), sha256: sha.macArm64 },
    { name: `animoia-${version}-macOS-x64.dmg`, platform: 'macOS (Intel)', href: file('macOS-x64.dmg'), sha256: sha.macX64 },
    { name: `animoia-${version}-linux.AppImage`, platform: 'Linux (AppImage)', href: file('linux.AppImage'), sha256: sha.appImage },
    { name: `animoia-${version}-linux.deb`, platform: 'Linux (.deb)', href: file('linux.deb'), sha256: sha.deb },
  ]
}

export const RELEASES: Release[] = [
  {
    version: '1.1.0',
    tag: '1.1.0',
    title: 'Animoia 1.1.0',
    date: 'September 21, 2026',
    isoDate: '2026-09-21',
    latest: true,
    summary:
      'A ground-up rewrite of the tracking system, a graph editor in the timeline, snapping and auto-tracing everywhere, a redesigned render window, and the first paid plugin: Rigid Bodies.',
    sections: [
      {
        title: 'Tracking System (Rewritten From Scratch)',
        items: [
          'Tracker window UI now matches the rest of the app.',
          'Markers can now be batch edited.',
          'The old destructive "smooth" button has been replaced with a per-tracker smoothness percentage that uses a much better algorithm to recover on frames where the tracker loses its path.',
          'You can now automatically detect features in the current frame and add trackers to them automatically.',
          "Click and drag inside the tracker's zoomed preview window to move it precisely at any frame.",
          'Tracking is significantly more optimized and faster.',
          "New cleanup tab lets you select or delete faulty markers (lost tracking, markers that move too much relative to the others, etc.) so you're left with only the good trackers.",
          'Enhanced tracker UI in the Inspector panel.',
          'Parenting a layer to a tracked video now opens a window to configure the parenting type and choose which trackers to use.',
          'Corner Pin can now select 4 trackers from a video to attach to.',
          'Stabilization now has a "scale to fit" toggle.',
          'Box select for markers.',
        ],
      },
      {
        title: 'Effects & Performance',
        items: [
          'New files now open at full resolution.',
          'Glow effect revamped: more optimized and more powerful.',
          'Twitch effect significantly improved.',
          'Dispersion effect now lets you select colors.',
          'Added Wrap effect.',
          'Sand/Particles effect overhaul: can now instance more than one layer at a time, added a noise scale option, and randomness can now be driven by a layer map instead of a fixed noise pattern.',
          'Added Path Array effect.',
          'Several text effects have been consolidated into 4 more powerful ones that cover everything the old effects did and more: Variation by Letter/Word (for continuous animation) and Transition By Letter/Word (for transitioning in/out).',
          'Added Text on Paths effect.',
          'Added Twitch effect.',
          'Added Polar Coordinates effect.',
          'Renamed the Sand effect to Particles, with new options including instancing a layer on each particle, plus an improved randomization algorithm.',
          'The Ghosts effect now works on video frames.',
        ],
      },
      {
        title: 'Text',
        items: ['Added support for variable fonts, including animating individual axes via text effects.'],
      },
      {
        title: 'Timeline & Stencils',
        items: [
          "The timestamp in the timeline's top-left corner is now editable.",
          'The timeline can now be converted into a graph editor. Properties shown are those with their "graph" toggle enabled (next to the stopwatch icon), plus any manually selected by the user.',
          'You can now solo layer visibility.',
          'Stencils now have a toggle to be guided by luminance instead of alpha.',
          "Layers that act as (hidden) stencils for others now show a ghost icon on their visibility toggle, indicating they're hidden but their bounding box is still selectable for manipulation.",
          'Stencil mode can also be switched to a luma-based match.',
        ],
      },
      {
        title: 'Snapping & Auto-Tracing',
        items: [
          'Snapping is now available for the Pen tool, Shape tool, and Anchor Point tool.',
          'Many new options, including independently defining allowed snapping sources and targets, plus the ability to snap to paths.',
          'Snapping guides are now colorful and more satisfying.',
          'Image layers now have an auto-trace option that converts their alpha channel into a mask.',
          'Video layers and compositions also support auto-trace, with the option to trace a single frame or the entire animation.',
          'Shapes, paths, convex hulls, SVGs, text layers, and connectors can all be converted to regular path layers, which also bakes in any path modifiers.',
        ],
      },
      {
        title: 'Keyframes & Modifiers',
        items: [
          'You can now select a layer from the timeline when picking a property with the Link Modifier.',
          'Added Ctrl+D or Alt+Drag shortcuts to duplicate keyframes.',
          'Ctrl+Drag on terminal keyframes now stretches them.',
          'Commas now auto-correct to decimal points when entering numbers.',
          'Added a Frame Drop modifier.',
        ],
      },
      {
        title: 'Rendering',
        items: [
          'Rendering window redesigned to give more control over output files, with a live preview of frames as they render.',
          'Rendering to an image sequence now saves frames directly into a folder as they finish, instead of a zipped file.',
        ],
      },
      {
        title: 'UI & Workflow',
        items: [
          'You can now drag project files directly into the composition (finally!).',
          'Multiple minor UI enhancements.',
          'Polygon sizes can now lock to aspect ratio.',
          'Smooth zoom anywhere in the app using the Blender-style shortcut (Ctrl + middle-mouse drag).',
          'Timeline header buttons redesigned to be more prominent; playback buttons are now shown in the UI instead of being shortcut-only.',
          'Any context that supports Select All now also supports Select Inverse.',
          'Preferences now let you assign up to 2 shortcuts per operation.',
          'Recent files can now be opened from the File menu.',
        ],
      },
      {
        title: 'New Tools & Panels',
        items: [
          'Puppet Pin: Mesh generation and deformation algorithms have been rewritten and are much improved.',
          'Boolean: New Boolean panel for performing standard operations on path/shape layers.',
          'New Layer Types: Added convex hulls and connectors between layers.',
        ],
      },
      {
        title: 'Rigid Bodies (Paid Plugin)',
        items: [
          'Rigid Bodies is now available as a paid plugin. Activate it from the Preferences menu with the license key you receive on purchase.',
          'Each license key can be activated on 2 machines at once, and only requires an internet connection at the moment of activation or deactivation (to free up a slot for another device).',
          'Once installed, a Rigid Bodies panel appears. Open it to define properties for any layer and run a simulation.',
          'Collision shapes: path/shape layers use their visible geometry (from the path plus any masks) as the collision shape.',
          'Collision shapes: transparent images and video layers need to be masked first to define a custom collision shape, otherwise their full bounding box is used. This makes the auto-trace feature especially useful, since it can generate that mask automatically (e.g. auto-tracing a chroma-keyed video of a person walking so the rigid body world reacts to their silhouette).',
          'Collision shapes: text layers must be converted to paths before they can be used in a simulation.',
          'All supported layer types can be set as either active or passive rigid bodies.',
          "Null layers can be set as force fields (turbulence, magnet, wind, vortex, etc.) in the Rigid Bodies window. A force field's intensity can be animated by animating the opacity of its null layer.",
          'Baking a rigid body simulation creates a duplicate of the composition with all resulting motion baked into the position and rotation properties of the animated layers.',
        ],
      },
      {
        title: 'Color & Import',
        items: [
          'Added support for importing EXR images and image sequences, with color effects now correctly handling their floating-point values.',
        ],
      },
      {
        title: 'Bug Fixes',
        items: [
          'Fixed text effects breaking on Hindi & CJK languages.',
          'The "Path" property now shows the correct point count for the entire layer.',
          'Pen tool & Graph Editor: Alt-clicking an anchor point with only one handle now adds the missing handle first (mirrored from the existing one) instead of removing both.',
          'Fixed large files and image sequences not showing up (but they load a bit slower).',
          'Fixed "Reverse Order" messing up easing.',
          'Fixed Modifier Keyframes sometimes pasting in the wrong place, plus some bugs where pasting keyframes across layers broke.',
          'Fixed a bug that allowed stencils to have circular dependencies.',
          "Changing a layer's tag color no longer deselects it.",
          'Various consistency improvements and general bug fixes.',
        ],
      },
    ],
    assets: assetsFor('1.1.0', LATEST_RELEASE_BASE, SHA256_1_1_0),
  },
  {
    version: '1.0.0',
    tag: 'v1.0.0',
    title: 'Animoia 1.0.0',
    date: 'August 25, 2026',
    isoDate: '2026-08-25',
    initial: true,
    summary: 'The first public release of Animoia for Windows, macOS, and Linux.',
    sections: [],
    assets: assetsFor('1.0.0', `${RELEASES_URL}/download/v1.0.0`, SHA256_1_0_0),
  },
]
