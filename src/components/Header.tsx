import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <header className='h-[72px] bg-white'>
      <div className='mx-auto flex max-w-[1200px] items-start justify-between'>
        <div className='size-[144px] rounded-full bg-white p-[22px]'>
          <Link
            href='/'
            className='relative block size-full overflow-x-hidden rounded-full bg-my-yellow'
          >
            <Image src='/img/logo.png' fill alt='logo' className='' />
          </Link>
        </div>
        <ul className='flex h-[72px] items-center gap-sp-2 lg:gap-pc-2'>
          {menus.map((menu) => (
            <li
              key={menu.href}
              className={cn(
                'rounded-full border-2 px-[18px] py-[6px]',
                menu.bo_color,
                menu.hover_bg_color,
              )}
            >
              <Link href={menu.href} className={menu.tx_color}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
