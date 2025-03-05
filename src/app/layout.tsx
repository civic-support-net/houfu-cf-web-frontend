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
      <body className='palt bg-my-yellow text-black'>
        <ClientLayout>{children}</ClientLayout>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  )
}
