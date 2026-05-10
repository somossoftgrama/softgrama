import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const title = 'Softgrama — AI-Powered Web Studio'
const description =
  'We design, build and grow websites for professional service businesses — with AI assistants, automated lead capture, and a team that stays with you every month.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  keywords: [
    'web design',
    'AI website',
    'web studio',
    'professional services website',
    'AI integration',
    'web development',
    'SEO',
    'care plan',
    'global web agency',
  ],
  authors: [{ name: 'Softgrama' }],
  creator: 'Softgrama',
  metadataBase: new URL('https://softgrama.com'),
  openGraph: {
    title,
    description,
    url: 'https://softgrama.com',
    siteName: 'Softgrama',
    images: [
      {
        url: '/logo-softgrama.svg',
        width: 800,
        height: 600,
        alt: 'Softgrama — AI-Powered Web Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@somossoftgrama',
    images: ['/logo-softgrama.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://softgrama.com',
  },
  icons: {
    icon: '/favicon.png',
  },
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#0A0A0A]`}
    >
      <body className="font-sans antialiased text-[#F5F5F3]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
