import '@/styles/globals.css'
import { Metadata } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'

import ClientLayout from '@/components/ClientLayout'
import { SEO_DEFAULT } from '@/lib/seo'
import { cn } from '@/lib/utils'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-zenmaru',
})

export const metadata: Metadata = SEO_DEFAULT

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={cn(zenMaruGothic.variable, 'fonts-sans')}>
      <body className='palt bg-primary font-zenmaru text-[16px] text-black'>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
