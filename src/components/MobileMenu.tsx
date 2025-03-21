import Image from 'next/image'
import Link from 'next/link'

import { menus } from '@/consts/menus'

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div
      className='absolute inset-8 overflow-auto rounded-sp border-4 border-black bg-white shadow-lg md:rounded-pc'
      onClick={(e) => e.stopPropagation()}
    >
      <nav className='flex h-full flex-col items-center justify-center space-y-sp-5 p-sp-6'>
        <div className=''>
          <Link href='/' className='relative block size-full'>
            <Image src='/img/logo.png' alt='logo' width={140} height={140} className='' />
          </Link>
        </div>
        <ul className='space-y-sp-4'>
          {menus.map((menu, index) => (
            <li key={index} className='flex items-start justify-center'>
              <Image src={menu.mg_href} alt='image' width={24} height={24} />
              <Link href={menu.href} className='ml-sp-3' onClick={closeMenu}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='relative h-[100px] min-w-[215px]'>
          <div className='absolute left-[-5%] top-0 size-[100px]'>
            <Image src='/img/hcf_heroillust_1.png' alt='' width={100} height={100} />
          </div>
          <div className='absolute left-1/2 top-[30%] size-[100px] -translate-x-1/2'>
            <Image src='/img/hcf_heroillust_2.png' alt='' width={100} height={100} />
          </div>
          <div className='absolute right-[-5%] top-[15%] size-[100px]'>
            <Image src='/img/hcf_heroillust_3.png' alt='' width={100} height={100} />
          </div>
        </div>
      </nav>
    </div>
  )
}
