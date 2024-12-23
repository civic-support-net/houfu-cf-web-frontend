'use client'

import { useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'

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
      <div className='fixed z-50 hidden w-full lg:fixed lg:block'>
        <Header />
      </div>
      {/* Mobile header button */}
      {/* TODO */}
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className='fixed right-4 top-4 z-50 rounded-full border-2 border-white text-white shadow-lg lg:hidden'
        aria-expanded={isMenuOpen}
        aria-controls='mobile-menu'
      >
        <span className='sr-only'>{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        {isMenuOpen ? (
          <div className='size-12 rounded-full bg-red-100 text-black'>close</div>
        ) : (
          <div className='size-12 rounded-full bg-green-100 text-black'>open</div>
        )}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id='mobile-menu' className='z-40 flex h-lvh bg-gray-400/50 backdrop-blur-sm lg:hidden'>
          <MobileMenu />
        </div>
      )}

      {/* Content */}
      <div className='flex h-lvh'>
        <main className='h-screen flex-1 overflow-y-auto'>
          <div className='mx-auto max-w-[1200px] px-[16px] md:px-[40px]'>{children}</div>
          <Footer />
        </main>
      </div>
    </>
  )
}
