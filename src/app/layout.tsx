import '@/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import ClientLayout from '@/components/ClientLayout'
import { SEO_DEFAULT } from '@/lib/seo'
import { cn } from '@/lib/utils'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: '700',
})

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export const metadata: Metadata = SEO_DEFAULT

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={cn(notoSansJP.variable, 'fonts-sans')}>
      <head>
        <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className='palt bg-my-yellow tracking-widest text-black'>
        <ClientLayout>{children}</ClientLayout>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  )
}
