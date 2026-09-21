import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kush Casino — официальный сайт и рабочее зеркало для игры онлайн',
  description: 'Kush Casino: официальный сайт, рабочее зеркало и понятный гид по игре онлайн. Быстрый мобильный доступ, правила, советы для новичков и ответственная игра.',
  metadataBase: new URL('https://kush4casino.vercel.app/'),
  alternates: { canonical: '/' },
  keywords: ['kush casino', 'kush casino официальный сайт', 'куш казино', 'kush casino зеркало', 'куш казино онлайн'],
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'Kush Casino — официальный сайт и рабочее зеркало',
    description: 'Понятный гид по Kush Casino для игры онлайн с телефона и компьютера.',
    url: 'https://kush4casino.vercel.app/',
    siteName: 'Kush Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, themeColor: '#101311' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="theme-color" content="#101311" />
        <link rel="canonical" href="https://kush4casino.vercel.app/" />
      </head>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
