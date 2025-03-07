import EntryFlow from '@/components/EntryFlow'
import FlagHeadline from '@/components/FlagHeadline'
import GoodsExample from '@/components/GoodsExample'
import Map from '@/components/Map'

export default function RecipientFlow() {
  return (
    // 白地がデフォルト背景
    <div className='bg-white text-sp-p lg:text-pc-p'>
      <div className='space-y-sp-1 p-sp-6 md:p-pc-6 lg:space-y-pc-1'>
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

      <div className='bg-my-palegreen p-sp-6 md:p-pc-6 '>
        <EntryFlow side='recipient' />
      </div>

      {/* 分割背景（上部だけ色あり） */}
      <div className='relative p-sp-2 md:p-pc-6 lg:p-pc-2'>
        <div className='absolute inset-0 z-0'>
          <div className='-mr-pc-6 h-1/2 w-full bg-my-palegreen'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-screen-md'>
          <GoodsExample side='recipient' />
        </div>
      </div>

      <div className='p-sp-3 md:p-pc-6'>
        <Map side='recipient' />
      </div>
    </div>
  )
}
