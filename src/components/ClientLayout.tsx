'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import { cn } from '@/lib/utils'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  return (
    <>
      {/* PC header */}
      <div className='sticky z-50 hidden w-full lg:block'>
        <Header />
      </div>
      {/* Mobile header button */}
      <Link
        href='/'
        className='fixed z-50 size-[96px] rounded-r-full rounded-bl-full bg-white p-sp-3 lg:hidden'
      >
        <Image src='/img/logo.png' width={64} height={64} alt='' />
      </Link>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'fixed right-2 top-2 z-50 flex size-[72px] flex-col items-center overflow-hidden rounded-full border-4 border-black pt-2 text-sm text-black lg:hidden',
          isMenuOpen ? 'bg-my-yellow' : 'bg-white',
        )}
        aria-expanded={isMenuOpen}
        aria-controls='mobile-menu'
      >
        <span className='sr-only'>{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        {isMenuOpen ? <p>とじる</p> : <p>メニュー</p>}
        <Image src='/img/hcf_fridge.png' width={36} height={52} alt='' />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id='mobile-menu' className='z-40 flex h-lvh  backdrop-blur-sm lg:hidden'>
          <MobileMenu />
        </div>
      )}

      {/* Content */}
      <div className=''>
        <main className='h-screen flex-1 overflow-y-auto'>
          <div className='mt-[96px] px-sp-3 lg:mt-[144px] xl:px-0'>{children}</div>
          <Footer />
        </main>
      </div>
    </>
  )
}
