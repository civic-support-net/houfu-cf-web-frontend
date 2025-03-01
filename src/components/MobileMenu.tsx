import Image from 'next/image'
import Link from 'next/link'

import { menus } from '@/consts/menus'
import { cn } from '@/lib/utils'

export default function MobileMenu() {
  return (
    <div
      className='absolute inset-8 overflow-auto rounded-sp border-4 border-black bg-white shadow-lg md:rounded-pc'
      onClick={(e) => e.stopPropagation()}
    >
      <nav className='flex flex-col items-center p-sp-3'>
        <div className='mt-sp-3 size-40 rounded-full p-sp-3'>
          <Link
            href='/'
            className='relative block size-full overflow-hidden rounded-full bg-my-yellow'
          >
            <Image src='/img/logo.png' fill alt='logo' className='' />
          </Link>
        </div>
        <div className='inset-0 flex'>
          <ul className='items-center gap-sp-3'>
            {menus.map((menu, index) => (
              <li key={index} className='my-sp-3 flex items-start justify-center'>
                <Image src={menu.mg_href} alt='image' width={24} height={24} />
                <Link href={menu.href} className='ml-sp-3'>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-sp-3 flex'>
          <Image src='/img/hcf_heroillust_1.png' alt='image' width={100} height={100} />
          <Image src='/img/hcf_heroillust_2.png' alt='image' width={100} height={100} />
        </div>
        <Image src='/img/hcf_heroillust_3.png' alt='image' width={100} height={100} />
      </nav>
    </div>
  )
}
