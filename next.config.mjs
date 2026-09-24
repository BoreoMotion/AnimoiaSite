import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    output: 'export',
    // Needed for GitHub Pages' folder/index.html output. Skipped in dev because
    // the v0 preview proxy strips trailing slashes, causing a redirect loop.
    trailingSlash: !isDev,
    images: {
      unoptimized: true,
    },
  }
}
