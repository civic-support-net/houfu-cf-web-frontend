import Image from 'next/image'

import Carousel from '@/components/Carousel'
import { mixMessagesToFlags } from '@/lib/flags'
import { Message } from '@/types/Message'

// 2パターンの背景色の順番を用意
const rTcs1 = ['text-my-palered', 'text-my-red', 'text-my-red', 'text-my-paleyellow']
const pTcs1 = ['text-my-palegreen', 'text-my-green']
const rTcs2 = ['text-my-red', 'text-my-paleyellow', 'text-my-red', 'text-my-palered']
const pTcs2 = ['text-my-green', 'text-my-palegreen']

export default function TopHero({
  recipientMessages,
  providerMessages,
}: {
  recipientMessages: Message[]
  providerMessages: Message[]
}) {
  // 旗の２つのラインにメッセージを割り振りながら、背景色や文字反転を仕込む
  const upperFlags = mixMessagesToFlags(recipientMessages, providerMessages, rTcs1, pTcs1)
  const lowerFlags = mixMessagesToFlags(recipientMessages, providerMessages, rTcs2, pTcs2)

  return (
    <div className='flex flex-col items-center justify-center gap-y-sp-3 md:gap-y-pc-4'>
      <div className='w-[120%] rotate-[-8deg] overflow-x-hidden'>
        <Carousel
          flags={upperFlags}
          options={{ loop: true, direction: 'ltr' }}
          plugins={{ speed: -1 }}
        />
      </div>
      <h1 className='flex w-full rotate-[-8deg] justify-center'>
        <Image
          src='/img/hcf_title_pc.png'
          alt='おたがいさまのキモチを応援！防府コミュニティフリッジ'
          width={720}
          height={120}
          className='hidden animate-myping md:block'
        />
        <Image
          src='/img/hcf_title_sp.png'
          alt='おたがいさまのキモチを応援！防府コミュニティフリッジ'
          width={343}
          height={147}
          className='animate-myping md:hidden'
        />
      </h1>
      <div className='w-[120%] rotate-[-8deg] overflow-x-hidden'>
        <Carousel
          flags={lowerFlags}
          options={{ loop: true, direction: 'ltr' }}
          plugins={{ speed: 1 }}
        />
      </div>
    </div>
  )
}
