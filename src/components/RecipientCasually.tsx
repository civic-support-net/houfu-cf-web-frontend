import Image from 'next/image'

import FlagHeadline from '@/components/FlagHeadline'
import MegaphoneHeadline from '@/components/MegaphoneHeadline'

export default function RecipientCasually() {
  const listItems = [
    {
      Image: '/img/hcf_xmascake.png',
      text: 'クリスマス',
    },
    {
      Image: '/img/hcf_kamaboko.png',
      text: 'お正月',
    },
    {
      Image: '/img/hcf_hinaarare.png',
      text: 'ひなまつり',
    },
  ]

  return (
    <div className='mx-auto gap-4 space-y-sp-6 bg-my-palegreen px-sp-3 py-sp-6 lg:space-y-pc-6 lg:p-pc-6'>
      <div className='px-sp-5 lg:p-0'>
        <FlagHeadline
          headlines={['さまざまな', 'お届けものが', 'あります']}
          bgColor='bg-my-green'
          textColor='text-white'
        />
        <div className='text-start text-sp-p lg:text-pc-p'>
          <p>
            クリスマスの時期にはクリスマスモニュメント、バレンタインの時期にはチョコなど季節を感じるものや、毎日使う食材や衛生用品など、たくさんの方から様々な品物が届いています。
          </p>
          <p>いつでもお気軽にうけとりにきてください！</p>
        </div>
      </div>

      <div className='mx-auto max-w-screen-md space-y-sp-5 lg:space-y-pc-5'>
        <div className='relative'>
          <div className='mx-auto space-y-sp-5 rounded-sp bg-white px-sp-5 py-sp-6 lg:space-y-pc-5 lg:rounded-pc lg:p-pc-6'>
            <MegaphoneHeadline
              side='recipient'
              headlines={['季節イベントならでは', 'の品物もあります']}
            />
            <ul className='flex w-full flex-col items-center justify-center gap-y-sp-5 lg:mx-auto lg:flex-row lg:gap-x-pc-5'>
              {listItems.map((item) => (
                <li key={item.text} className='flex flex-col items-center gap-[0.25em]'>
                  <Image
                    src={item.Image}
                    width={180}
                    height={180}
                    alt=''
                    className='rounded-full'
                  />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='absolute -top-sp-5 right-sp-5 z-10 aspect-[180/315] w-pc-5 lg:-top-pc-5 lg:right-pc-6 lg:w-[50px]'>
            <Image src='/img/hcf_take.png' fill alt='' className='animate-myspinc' />
          </div>
        </div>

        <div className='relative'>
          <div className='mx-auto max-w-screen-lg space-y-sp-5 rounded-sp bg-white px-sp-5 py-sp-6 lg:space-y-pc-5 lg:rounded-pc lg:p-pc-6'>
            <MegaphoneHeadline
              side='recipient'
              headlines={['お米や野菜などの', '生鮮食品もあります']}
            />
            <p className='text-center text-sp-p lg:text-left lg:text-pc-p'>
              農家の方やお店の方からいただいたお米や野菜など、毎日のご飯に助かる生鮮食品も届いています。
            </p>
          </div>
          <div className='absolute -bottom-sp-5 left-sp-5 z-10 aspect-square w-[60px] rotate-[-10deg] lg:-left-pc-5 lg:bottom-pc-5 lg:w-[80px]'>
            <Image src='/img/hcf_uketoruillust_2.png' fill alt='' className='animate-myspina' />
          </div>
        </div>
      </div>
    </div>
  )
}
