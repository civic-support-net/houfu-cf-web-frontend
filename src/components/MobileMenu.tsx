import Image from 'next/image'
import Link from 'next/link'

import { menus } from '@/consts/menus'
import { cn } from '@/lib/utils'

export default function MobileMenu() {
  return (
    <div
      className='absolute inset-8 overflow-auto rounded-2xl border-4 border-black bg-white shadow-lg'
      onClick={(e) => e.stopPropagation()}
    >
      <nav className='flex flex-col items-center p-4'>
        <div className='bg-orange-white mt-4 size-40 rounded-full p-4'>
          <Link
            href='/'
            className='relative block size-full overflow-hidden rounded-full bg-primary'
          >
            <Image src='/img/logo.png' fill alt='logo' className='' />
          </Link>
        </div>
        <div className='inset-0 flex'>
          <ul className='items-center gap-4'>
            {menus.map((menu, index) => (
              <li key={index} className='my-4 flex items-start justify-center'>
                <Image src={menu.mg_href} alt='image' width={24} height={24} />
                <Link href={menu.href} className='ml-4'>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-4 flex'>
          <Image src='#' alt='image' width={100} height={100} />
          <Image src='#' alt='image' width={100} height={100} />
        </div>
        <Image src='#' alt='image' width={100} height={100} />
      </nav>
    </div>
  )
}
