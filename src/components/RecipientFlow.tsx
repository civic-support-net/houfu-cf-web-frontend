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
          headline='「今日の晩ごはん」のもう１品をうけとってみませんか？'
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
      <div className='relative p-[48px] md:p-[88px]'>
        <div className='absolute inset-0 z-0'>
          <div className='mr-[-88px] h-1/2 w-full bg-my-palegreen'></div>
        </div>
        <div className='relative z-10'>
          <GoodsExample />
        </div>
      </div>

      <div className='p-[48px] md:p-[88px]'>
        <Map />
      </div>
    </div>
  )
}
