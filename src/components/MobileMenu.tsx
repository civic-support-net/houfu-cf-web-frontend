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
      <nav className='p-4'>
        <div className='mt-10 size-40 rounded-full bg-orange-300 p-6'>
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
              <li key={index} className='my-3 flex items-start justify-center'>
                <span className={cn('mr-2 mt-2 inline-block size-2 shrink-0', menu.bg_color)} />
                <Link href={menu.href} className=''>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Image src='#' alt='image' width={300} height={300} />
      </nav>
    </div>
  )
}
