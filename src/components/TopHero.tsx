import Image from 'next/image'

import Carousel, { Flag } from '@/components/Carousel'
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
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[120%] rotate-[-8deg] overflow-hidden'>
        <Carousel
          flags={upperFlags}
          options={{ loop: true, direction: 'ltr' }}
          plugins={{ speed: -1 }}
        />
      </div>
      <div className='flex w-full rotate-[-8deg] flex-col items-center gap-4'>
        <h1 className='text-sp-h1 md:text-pc-h1'>
          <div className='flex items-center gap-x-[0.375em]  md:gap-x-[1em] '>
            <Image
              src='/img/hcf_hukidashi.png'
              alt=''
              width='60'
              height='40'
              className='aspect-[5/6] w-pc-5 md:w-[60px]'
            ></Image>
            <div className='my-[0.5em] text-center'>
              <p className=''>
                おたがいさまの
                <br className='lg:hidden' />
                キモチを応援
              </p>
              <p>防府コミュニティフリッジ</p>
            </div>
            <Image
              src='/img/hcf_hukidashi.png'
              alt=''
              width='60'
              height='40'
              className='aspect-[5/6] w-pc-5 -scale-x-100 md:w-[60px]'
            ></Image>
          </div>
        </h1>
      </div>
      <div className='w-[120%] rotate-[-8deg] overflow-hidden'>
        <Carousel
          flags={lowerFlags}
          options={{ loop: true, direction: 'ltr' }}
          plugins={{ speed: 1 }}
        />
      </div>
    </div>
  )
}

function mixMessagesToFlags(
  rMsgs: Message[],
  pMsgs: Message[],
  rTcs: string[],
  pTcs: string[],
): Flag[] {
  const flags: Flag[] = []

  // recipient2つprovider1つの順で旗を追加していく
  let index = 0
  let indexR = 0
  let indexP = 0
  while (indexR < rMsgs.length && indexP < pMsgs.length) {
    let flag
    if (index % 3 === 0 || index % 3 === 1) {
      // recipient
      const textColor = rTcs[indexR % rTcs.length]
      flag = {
        imageUrl: rMsgs[indexR].imageUrl,
        textColor,
        isInvertImage: textColor.includes('pale') ? false : true,
      }
      indexR++
    } else {
      // provider
      const textColor = pTcs[indexP % pTcs.length]
      flag = {
        imageUrl: pMsgs[indexP].imageUrl,
        textColor,
        isInvertImage: textColor.includes('pale') ? false : true,
      }
      indexP++
    }

    flags.push(flag)
    index++
  }

  return flags
}
