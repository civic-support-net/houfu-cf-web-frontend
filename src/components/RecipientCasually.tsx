import Image from 'next/image'

import FlagHeadline from '@/components/FlagHeadline'

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
    <div className='mx-auto gap-4 space-y-4 bg-green-100 px-[16px] py-[44px] md:space-y-8 md:p-[88px]'>
      <div className='space-y-4'>
        <div className='hidden lg:block'>
          <FlagHeadline
            headlines={['さまざまな', 'お届けものが', 'あります']}
            bgColor='bg-my-green'
            textColor='text-white'
          />
        </div>
        <div className='m-auto block rounded-lg bg-my-green p-4 text-center text-[24px] text-white lg:hidden'>
          <p>さまざまな</p>
          <p>お届けものが</p>
          <p>あります</p>
        </div>
        <div className='text-start text-[16px]'>
          <p>
            クリスマスの時期にはクリスマスモニュメント、バレンタインの時期にはチョコなど季節を感じるものや、毎日使う食材や衛生用品など、たくさんの方から様々な品物が届いています。
          </p>
          <p>いつでもお気軽にうけとりにきてください！</p>
        </div>
      </div>

      <div className='rounded-lg bg-white px-[28px] py-[44px] md:p-[84px]'>
        <div className='mb-4 flex flex-row items-center justify-center gap-4'>
          <Image src='/img/hcf_megahon_uketoru.png' width={24} height={24} alt='' />
          <div className='flex flex-col text-[24px] md:flex-row'>
            <p>季節イベントならでは</p>
            <p>の品物もあります</p>
          </div>
        </div>
        <ul className='flex w-full flex-col items-center justify-center space-x-1 space-y-[28px] md:mx-auto md:flex-row md:space-x-[40px] md:space-y-[4px]'>
          {listItems.map((item) => (
            <li key={item.text} className='flex flex-col items-center gap-[0.25em]'>
              <Image src={item.Image} width={180} height={180} alt='' className='rounded-full' />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='rounded-lg bg-white px-[28px] py-[44px] md:p-[84px]'>
        <div className='mb-4 flex flex-row items-center justify-center gap-4'>
          <Image src='/img/hcf_megahon_uketoru.png' width={30} height={30} alt='' />
          <div className='flex flex-col text-[24px] md:flex-row'>
            <p>お米や野菜などの</p>
            <p>生鮮食品もあります</p>
          </div>
        </div>
        <p className='text-start text-[12px]'>
          農家の方やお店の方からいただいたお米や野菜など、毎日のご飯に助かる生鮮食品も届いています。
        </p>
      </div>
    </div>
  )
}
