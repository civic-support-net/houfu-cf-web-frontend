import Image from 'next/image'

import EntryFlow from '@/components/EntryFlow'
import FlagHeadline from '@/components/FlagHeadline'
import GoodsExample from '@/components/GoodsExample'
import Map from '@/components/Map'

export default function RecipientFlow() {
  return (
    // 白地がデフォルト背景
    <div className='bg-white py-sp-6 text-sp-p lg:py-pc-6 lg:text-pc-p'>
      <div className='mb-sp-6 space-y-sp-1 px-sp-6 lg:mb-pc-6 lg:space-y-pc-1 lg:px-pc-6'>
        <FlagHeadline
          headlines={['届いた品物を', 'いつでも自由に', 'うけとる']}
          bgColor='bg-my-green'
          textColor='text-white'
        />
        <p>
          コミュニティフリッジを必要としているご家庭を対象に、「うけとりメンバー」登録をしてご利用いただいています。
        </p>
        <p>
          例えば、今日の晩ごはんのおかずをもう1品増やしたい時、新学期から使う学用品が足らない時など、届いた食品や日用品をうけとることができます。また登録の際にお渡しする電子ロックの鍵を使って、ひと目を気にすることなく自由にご利用いただけます。
        </p>
      </div>

      <div className='relative bg-my-palegreen'>
        <EntryFlow side='recipient' />
        <div className='absolute -top-sp-5 right-sp-5 z-10 aspect-square w-[60px] lg:-top-pc-5 lg:right-pc-6 lg:w-[80px]'>
          <Image src='/img/hcf_uketoruillust_1.png' fill alt='' />
        </div>
      </div>

      {/* 分割背景（上部だけ色あり） */}
      <div className='relative px-sp-2 pt-sp-6 lg:pt-pc-6'>
        <div className='absolute inset-0 z-0'>
          <div className='h-1/2 w-full bg-my-palegreen'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-screen-md'>
          <GoodsExample side='recipient' />
        </div>
      </div>

      <div id='place' className='scroll-mt-[100px] px-sp-3 lg:px-pc-6'>
        <Map side='recipient' />
      </div>
    </div>
  )
}
