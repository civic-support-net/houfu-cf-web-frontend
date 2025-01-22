import FlagHeadline from '@/components/FlagHeadline'
import Image from 'next/image'

export default function RecipientCasually() {
  const listItems = [
    {
      Image:'/img/hcf_xmascake.png',
      text:'クリスマス'
    },
    {
      Image:'/img/hcf_kamaboko.png',
      text:'お正月',
    },
    {
      Image:'/img/hcf_hinaarare.png',
      text:'ひなまつり',
    },
  ]

  return (
    <div className='bg-green-100 mx-auto px-[16px] py-[44px] gap-4 md:p-[88px] space-y-4 md:space-y-8'>
      <div className='space-y-4'>
      <div className='hidden lg:block'>
          <FlagHeadline
            headline='さまざまなお届けがあります'
            bgColor='bg-my-green'
            textColor='text-white'
          />
        </div>
        <div className='block lg:hidden bg-my-green text-white rounded-lg p-4 text-center text-lg text-[24px] mx-auto my-auto'>
          <p>さまざまな</p>
          <p>お届けものが</p>
          <p>あります</p>
        </div>
        <div className='text-start text-[16px]'>
        <p>クリスマスの時期にはクリスマスモニュメント、バレンタインの時期にはチョコなど季節を感じるものや、毎日使う食材や衛生用品など、たくさんの方から様々な品物が届いています。</p>
        <p>いつでもお気軽にうけとりにきてください！</p>
        </div>
      </div>

      <div className='px-[28px] py-[44px] md:px-[84px] md:py-[84px] rounded-lg bg-white'>
        <div className='flex flex-row items-center justify-center gap-4 mb-4'>
          <Image src='/img/hcf_megahon_uketoru.png' width={24} height={24} alt='' />
          <div className='flex flex-col md:flex-row text-[24px]'>
            <p >季節イベントならでは</p>
            <p>の品物もあります</p>
          </div>
        </div>
        <ul className='flex flex-col w-full md:mx-auto space-x-1 space-y-[28px] md:flex-row md:space-x-[40px] md:space-y-[4px] items-center justify-center'>
          {listItems.map((item) => (
            <li key={item.text} className='flex flex-col items-center gap-[0.25em]'>
              <Image src={item.Image} width={180} height={180} alt='' className='rounded-full' />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='px-[28px] py-[44px] md:px-[84px] md:py-[84px] rounded-lg bg-white'>
        <div className='flex flex-row items-center justify-center gap-4 mb-4'>
          <Image src='/img/hcf_megahon_uketoru.png' width={30} height={30} alt=''  />
          <div className='flex flex-col md:flex-row text-[24px]'>
            <p>お米や野菜などの</p>
            <p>生鮮食品もあります</p>
          </div>
        </div>
        <p className='text-start text-[12px]'>農家の方やお店の方からいただいたお米や野菜など、毎日のご飯に助かる生鮮食品も届いています。</p>
      </div>
    </div>
  )
}
