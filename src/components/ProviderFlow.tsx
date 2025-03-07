import EntryFlow from '@/components/EntryFlow'
import FlagHeadline from '@/components/FlagHeadline'
import GoodsExample from '@/components/GoodsExample'
import Map from '@/components/Map'

export default function ProviderFlow() {
  return (
    // 白地がデフォルト背景
    <div className='bg-white text-sp-p lg:text-pc-p'>
      <div className='space-y-sp-1 p-sp-6 md:p-pc-6 lg:space-y-pc-1'>
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

      <div className='bg-my-palered p-sp-6 md:p-pc-6 '>
        <EntryFlow side='provider' />
      </div>

      {/* 分割背景（上部だけ色あり） */}
      <div className='relative p-sp-2 md:p-pc-6 lg:p-pc-2'>
        <div className='absolute inset-0 z-0'>
          <div className='-mr-pc-6 h-1/2 w-full bg-my-palered'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-screen-md'>
          <GoodsExample side='provider' />
        </div>
      </div>

      <div className='p-sp-3 lg:p-pc-6'>
        <Map side='provider' />
      </div>
    </div>
  )
}
