import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'
import { SmoothScroll } from '@/components/smooth-scroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://animoia.com'),
  title: 'Animoia — Free motion graphics and compositing app',
  description:
    'Animoia is a FREE motion graphics and compositing app built around a familiar layer based workflow. Design, animate, and composite in one place.',
  icons: {
    icon: [{ url: '/brand/animoia-mark.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';" }} />
        <link rel="stylesheet" href="https://use.typekit.net/eny1ijp.css" />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
