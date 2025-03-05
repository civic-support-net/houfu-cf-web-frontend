import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-white py-sp-5 lg:py-pc-5'>
      <div className='flex flex-col justify-start items-center relative mx-auto w-full px-4 max-w-[1024px] space-y-sp-3 lg:flex-row lg:space-x-pc-4'>
        <Image src='/img/logo.png' width={128} height={128} className='' alt='ロゴ' />

        <ul className='flex flex-col space-y-sp-2  lg:space-y-pc-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2'>
          {menus.map((menu, index) => (
            <li key={index} className='flex '>
              <Image src='/img/hcf_yajirushi.png' width={23} height={16} alt=''></Image>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>

        <div className='text-center text-sp-p lg:text-pc-p lg:text-left'>
          <p className='text-sp-h2 lg:text-pc-h2'>防府コミュニティブリッジ</p>
          <div className='space-y-[1em]'>
            <Link href='null'>特定非営利活動法人市民活動さぽーとねっと</Link>
            <div>
              <div className='flex flex-col lg:flex-row'>
                <p>〒745-0035</p>
                <p>山口県防府市栄町1-1-17 (ルルサス防府)</p>
              </div>
              <p>TEL 0835-24-7744</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
