import { SessionProvider } from 'next-auth/react'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = 'Zensla - ZEN大学のSlackチャンネルを表示するサイト'
const description = 'ZEN大学のSlackチャンネルを表示するサイトです。'
const url = 'https://zensla.mktoho.dev'

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },

  description,

  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png', // iOSホーム画面用
    shortcut: '/favicon.ico',
  },

  openGraph: {
    title,
    description,
    url,
    siteName: 'Zensla',
    images: [
      {
        url: `${url}/zen-channels-ogp.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${url}/zen-channels-ogp.png`],
    creator: '@mktoho12',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
