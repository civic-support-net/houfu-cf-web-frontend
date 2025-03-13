import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-white py-sp-5 lg:py-pc-5'>
      <div className='relative mx-auto flex max-w-screen-lg flex-col items-center gap-y-sp-3 lg:flex-row lg:gap-x-pc-4'>
        <Image src='/img/logo.png' width={128} height={128} className='' alt='ロゴ' />

        <ul className='flex flex-col space-y-sp-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:space-y-pc-2'>
          {menus.map((menu, index) => (
            <li key={index} className=''>
              <Link href={menu.href} className='flex items-center gap-x-2 text-sp-p lg:text-pc-p'>
                <Image src='/img/hcf_yajirushi.png' width={23} height={16} alt=''></Image>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='space-y-[1em] text-sp-p2 lg:text-pc-p2'>
          <div className='flex flex-col items-center'>
            <p className='my-0 text-sp-h2 lg:text-pc-h2'>防府コミュニティブリッジ</p>
            <Link
              href='https://hofu-saponet.sakura.ne.jp/'
              target='_blank'
              className='flex items-center text-sp-p lg:text-pc-p'
            >
              特定非営利活動法人市民活動さぽーとねっと <SquareArrowOutUpRight size={18} />
            </Link>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center space-x-2 lg:flex-row'>
              <p>〒745-0035</p>
              <p>山口県防府市栄町1-1-17 (ルルサス防府)</p>
            </div>
            <p>TEL 0835-24-7744</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
