import Image from 'next/image'

import Carousel, { Flag } from '@/components/Carousel'
import { Message } from '@/types/Message'

export default function TopHero({
  recipientMessages,
  providerMessages,
}: {
  recipientMessages: Message[]
  providerMessages: Message[]
}) {
  // 旗の２つのラインにメッセージを割り振りながら、背景色や文字反転を仕込む
  const upperFlags = mixMessagesToFlags(recipientMessages, providerMessages)
  const lowerFlags = upperFlags.slice().reverse()

  return (
    <div className='mt-[80px] flex flex-col items-center justify-center space-y-8 lg:mt-[128px]'>
      <div className='w-[120%] rotate-[-8deg] overflow-hidden'>
        <Carousel
          flags={upperFlags}
          options={{ loop: true, direction: 'ltr' }}
          plugins={{ speed: -1 }}
        />
      </div>
      <div className='flex w-full rotate-[-8deg] flex-col items-center gap-4'>
        <div className='flex items-center gap-x-[0.4em] md:gap-x-[1em]'>
          <Image
            src='/img/hcf_hukidashi.png'
            alt=''
            width='60'
            height='40'
            className='aspect-[5/6] w-[40px] md:w-[60px]'
          ></Image>
          <p className='text-hb text-center text-[1.75rem] md:text-[2.5rem]'>
            おたがいさまの
            <br className='lg:hidden' />
            キモチを応援！
          </p>
          <Image
            src='/img/hcf_hukidashi.png'
            alt=''
            width='60'
            height='40'
            className='aspect-[5/6] w-[40px] -scale-x-100 md:w-[60px]'
          ></Image>
        </div>
        <h1 className='text-[1.5rem]'>防府コミュニティフリッジ</h1>
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

const recipientBgs = ['bg-my-palered', 'bg-my-red', 'bg-my-red', 'bg-my-paleyellow']

const providerBgs = ['bg-my-palegreen', 'bg-my-green']

function mixMessagesToFlags(recipientMsgs: Message[], providerMsgs: Message[]): Flag[] {
  const flags: Flag[] = []

  // recipient2つprovider1つの順で旗を追加していく
  let index = 0
  let indexR = 0
  let indexP = 0
  while (indexR < recipientMsgs.length || indexP < providerMsgs.length) {
    let flag
    if (index % 3 === 0 || index % 3 === 1) {
      // recipient
      const bgColor = recipientBgs[indexR % recipientBgs.length]
      flag = {
        imageUrl: recipientMsgs[indexR].imageUrl,
        bgColor,
        isInvertImage: bgColor.includes('pale') ? false : true,
      }
      indexR++
    } else {
      // provider
      const bgColor = providerBgs[indexP % providerBgs.length]
      flag = {
        imageUrl: providerMsgs[indexP].imageUrl,
        bgColor,
        isInvertImage: bgColor.includes('pale') ? false : true,
      }
      indexP++
    }

    flags.push(flag)
    index++
  }

  return flags
}
