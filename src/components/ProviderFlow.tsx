import Image from 'next/image'

import EntryFlow from '@/components/EntryFlow'
import FlagHeadline from '@/components/FlagHeadline'
import GoodsExample from '@/components/GoodsExample'
import Map from '@/components/Map'

export default function ProviderFlow() {
  return (
    // 白地がデフォルト背景
    <div className='bg-white py-sp-6 text-sp-p lg:py-pc-6 lg:text-pc-p'>
      <div className='mb-sp-6 space-y-sp-1 px-sp-6 lg:mb-pc-6 lg:space-y-pc-1 lg:px-pc-6'>
        <FlagHeadline
          headlines={['キモチを', 'かたちにしておくる']}
          bgColor='bg-my-red'
          textColor='text-white'
        />
        <p>
          コミュニティフリッジでは、食品や日用品を提供してくださる方を「フードプレゼンター」と呼んでいます。
        </p>
        <p>
          例えば、多めに買っていたお菓子、子どもの成長とともに使わなくなったベビー用品、お中元やお歳暮、お店の在庫整理等で出てきた商品、規格サイズ外で出荷ができない農作物など、個人はもちろん農家の方や企業やお店の方だれでもフードプレゼンターとして品物をおくることができます。
        </p>
      </div>

      <div className='relative bg-my-palered'>
        <EntryFlow side='provider' />
        <div className='absolute -top-sp-5 right-sp-5 z-10 aspect-square w-[60px] lg:-top-pc-5 lg:right-pc-6 lg:w-[80px]'>
          <Image src='/img/hcf_okuruillust_2.png' fill alt='animate-myspinb' />
        </div>
      </div>

      {/* 分割背景（上部だけ色あり） */}
      <div className='relative px-sp-2 pt-sp-6 lg:pt-pc-6'>
        <div className='absolute inset-0 z-0'>
          <div className='h-1/2 w-full bg-my-palered'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-screen-md'>
          <GoodsExample side='provider' />
        </div>
      </div>

      <div id='place' className='scroll-mt-[100px] px-sp-3 lg:px-pc-6'>
        <Map side='provider' />
      </div>
    </div>
  )
}
