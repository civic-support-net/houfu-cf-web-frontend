import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Message } from '@/types/Message'

type Flag = {
  imageUrl: string
  bgColor: string
  isInvert: boolean
}

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
    <div className='mt-[168px] flex flex-col items-center justify-center'>
      <ul className='my-8 flex flex-wrap'>
        {upperFlags.map((flag, idx) => (
          <li
            key={idx}
            className={cn('clip-wavy relative bg-my-red p-[28px] sm:w-1/2 lg:w-1/4', flag.bgColor)}
          >
            <div className='relative aspect-[5/3] w-full'>
              <Image src={flag.imageUrl} fill alt='' className={cn(flag.isInvert && 'invert')} />
            </div>
            <div className='h-[28px]' />
          </li>
        ))}
      </ul>

      <div>
        <p className='text-hb flex flex-col items-center'>
          「お互いさまのきもち」を応援
          <br />
          みんなの冷蔵庫
          <br />
        </p>
        <h1 className=''>防府コミュニティフリッジ</h1>
      </div>

      <ul className='my-8 flex flex-wrap'>
        {lowerFlags.map((flag, idx) => (
          <li
            key={idx}
            className={cn('clip-wavy relative bg-my-red p-[28px] sm:w-1/2 lg:w-1/4', flag.bgColor)}
          >
            <div className='relative aspect-[5/3] w-full'>
              <Image src={flag.imageUrl} fill alt='' className={cn(flag.isInvert && 'invert')} />
            </div>
            <div className='h-[28px]' />
          </li>
        ))}
      </ul>
    </div>
  )
}

const recipientBgs = ['bg-my-palered', 'bg-my-red', 'bg-my-red', 'bg-my-paleyellow']

const providerBgs = ['bg-my-green', 'bg-my-palegreen']

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
        isInvert: bgColor.includes('pale') ? false : true,
      }
      indexR++
    } else {
      // provider
      const bgColor = providerBgs[indexP % providerBgs.length]
      flag = {
        imageUrl: providerMsgs[indexP].imageUrl,
        bgColor,
        isInvert: bgColor.includes('pale') ? false : true,
      }
      indexP++
    }

    flags.push(flag)
    index++
  }

  return flags
}
