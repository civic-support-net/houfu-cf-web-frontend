import Image from 'next/image'

import MegaphoneHeadline from '@/components/MegaphoneHeadline'
import { cn } from '@/lib/utils'

function CircleContents({
  headline,
  listItems,
  info,
  bgColor,
  bgPaleColor,
}: {
  headline: string
  listItems: string[][]
  info: string
  bgColor: string
  bgPaleColor: string
}) {
  return (
    <div className='space-y-sp-3'>
      <div className={cn('mr-[0.5rem] mt-[0.5rem] inline-block size-[1rem] shrink-0', bgColor)} />
      {headline}
      <ul className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {listItems.map((item, index) => (
          <li key={index} className='flex flex-col items-center'>
            <div className='size-32 rounded-full lg:size-36'>
              <div
                className={cn(
                  'relative flex size-full items-center justify-center overflow-hidden rounded-full',
                  bgPaleColor,
                )}
              >
                <Image src={item[0]} width={80} height={80} alt='logo' className='' />
              </div>
            </div>
            <span>{item[1]}</span>
          </li>
        ))}
      </ul>
      <p className='text-sp-p2 lg:text-pc-p2'>{info}</p>
    </div>
  )
}

export default function GoodsExample({ side }: { side: 'provider' | 'recipient' }) {
  const firstText =
    side === 'provider'
      ? ['おくれる品物の例', 'お中元やお歳暮などの贈答品も受け付けております。']
      : ['うけとれる品物の例', '']
  const secondText =
    side === 'provider'
      ? [
          'おくれない品物の例',
          'ご家庭で作られた料理・ラベル表示がない食品・外国語表記で内容がわからない食品・消費期限が切れている食品・酒類・医薬品など',
        ]
      : [
          '対象のご家庭',
          '防府市内のひとり親家庭などで、NPOや児童委員などのサポートを受けているご家庭を対象にご利用いただけます。',
        ]
  const listInfo =
    side === 'provider'
      ? [
          {
            headline: '食料品',
            listItems: [
              ['/img/hcf_rice.png', 'お米'],
              ['/img/hcf_vegetable.png', '野菜'],
              ['/img/hcf_snack.png', 'お菓子'],
              ['/img/hcf_retort.png', 'レトルト商品'],
            ],
            info: '肉・魚・缶詰・乾物・麺類・インスタント・調味料・食用油・飲料・ベビーフード・離乳食など',
          },
          {
            headline: '日用品',
            listItems: [
              ['/img/hcf_toiletpaper.png', 'トイレットペーパー'],
              ['/img/hcf_detergent.png', '洗剤'],
              ['/img/hcf_diaper.png', 'おむつ'],
              ['/img/hcf_sanitary.png', '衛生用品'],
            ],
            info: '生理用品・石鹸・文房具や学用品など',
          },
        ]
      : [
          {
            headline: '食料品',
            listItems: [
              ['/img/hcf_rice.png', 'お米'],
              ['/img/hcf_vegetable.png', '野菜'],
              ['/img/hcf_snack.png', 'お菓子'],
              ['/img/hcf_retort.png', 'レトルト商品'],
            ],
            info: '肉・魚・缶詰・乾物・麺類・インスタント・調味料・食用油・飲料・ベビーフード・離乳食など',
          },
          {
            headline: '日用品',
            listItems: [
              ['/img/hcf_toiletpaper.png', 'トイレットペーパー'],
              ['/img/hcf_detergent.png', '洗剤'],
              ['/img/hcf_diaper.png', 'おむつ'],
              ['/img/hcf_sanitary.png', '衛生用品'],
            ],
            info: '生理用品・石鹸・文房具や学用品など',
          },
        ]
  const bgColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const bgPaleColor = side === 'provider' ? 'bg-my-palered' : 'bg-my-palegreen'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  return (
    <div className='space-y-sp-6 rounded-sp bg-white px-sp-5 py-sp-6 lg:space-y-pc-6 lg:rounded-pc lg:p-pc-6'>
      <div className='space-y-sp-3'>
        <MegaphoneHeadline side={side} headlines={[firstText[0]]} />
        <p>{firstText[1]}</p>
      </div>
      <ul className='space-y-sp-6 lg:space-y-pc-6'>
        {listInfo.map((note, index) => (
          <li key={index} className=''>
            <CircleContents
              headline={note.headline}
              listItems={note.listItems}
              info={note.info}
              bgColor={bgColor}
              bgPaleColor={bgPaleColor}
            />
          </li>
        ))}
      </ul>

      <div className={cn('border-t-[2px] border-dashed', borderColor)}></div>
      <div className='space-y-sp-3'>
        <MegaphoneHeadline side={side} headlines={[secondText[0]]} />
        <p>{secondText[1]}</p>
      </div>
    </div>
  )
}
