import EntryFlow from '@/components/EntryFlow'
import FlagHeadline from '@/components/FlagHeadline'
import GoodsExample from '@/components/GoodsExample'
import Map from '@/components/Map'

export default function RecipientFlow() {
  return (
    // 白地がデフォルト背景
    <div className='bg-white'>
      <div className='p-[48px] md:p-[88px]'>
        <FlagHeadline
          headlines={['届いた品物を', 'いつでも自由に', 'うけとる']}
          bgColor='bg-my-green'
          textColor='text-white'
        />
        <p>
          何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。何かしらの文章。
        </p>
      </div>

      <div className='bg-my-palegreen p-[48px] md:p-[88px] '>
        <EntryFlow side='recipient' />
      </div>

      {/* 分割背景（上部だけ色あり） */}
      <div className='relative p-[12px] md:p-[88px]'>
        <div className='absolute inset-0 z-0'>
          <div className='mr-[-88px] h-1/2 w-full bg-my-palegreen'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-screen-md'>
          <GoodsExample side='recipient' />
        </div>
      </div>

      <div className='p-[48px] md:p-[88px]'>
        <Map />
      </div>
    </div>
  )
}
