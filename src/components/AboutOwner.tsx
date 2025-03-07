import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import FlagHeadline from '@/components/FlagHeadline'

export default function AboutOwner() {
  return (
    <div className='bg-white p-sp-6 lg:p-pc-6'>
      <FlagHeadline
        headlines={['防府コミュニティ', 'フリッジを', '運営している団体']}
        bgColor='bg-my-yellow'
        textColor='text-black'
      />
      <div className='flex flex-col-reverse items-center text-sp-p md:flex-row lg:text-pc-p'>
        <div className='flex flex-col items-center gap-sp-3 md:items-start lg:gap-y-pc-3'>
          <h3 className='text-center text-sp-h4 lg:text-pc-h4'>
            <Link
              href='https://hofu-saponet.sakura.ne.jp/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1  md:text-left'
            >
              特定非営利活動法人
              <br className='md:hidden' />
              市民活動さぽーとねっと
              <ExternalLink />
            </Link>
          </h3>
          <p>
            新型コロナウイルス感染症による影響などで、困難を抱えている子育て家庭などを支えたいと、国内では岡山県から始まった「コミュニティフリッジ」は今、全国に広がりつつあります。
          </p>
          <p>
            防府市でも、山口県初の「みんなの公共冷蔵庫」として、令和3年11月に活動をスタートさせました。
          </p>
        </div>
        <div className='relative aspect-square size-full max-w-[200px]'>
          <Image
            src='/img/hcf_supportnet_logo.png'
            alt='特定非営利活動法人市民活動さぽーとねっと'
            fill
          />
        </div>
      </div>
    </div>
  )
}
