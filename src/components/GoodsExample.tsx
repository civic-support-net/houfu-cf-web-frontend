import Image from 'next/image'
import { cn } from '@/lib/utils'
/*export const goods = {
  recipient: [
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
  ],
  provider: [
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
  ],
}*/
const goods = [
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
    <div className=''>
      <div className={cn('mr-2 mt-2 inline-block size-4 shrink-0', bgColor)} />
      {headline}
      <ul className='grid grid-cols-2 gap-12 md:grid-cols-4'>
        {listItems.map((item, index) => (
          <li key={index} className='my-3 flex flex-col items-center'>
            <div className='size-28 rounded-full'>
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
      <p>{info}</p>
    </div>
  )
}

export default function GoodsExample() {
  //  田中くん担当（高さ指定とグレー背景は削除する）
  const side = 'recipient'
  const firstText =
    side === 'provider'
      ? ['おくれる品物の例', 'お中元やお歳暮などの贈答品も受け付けております']
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
  const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'
  const bgColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const bgPaleColor = side === 'provider' ? 'bg-my-palered' : 'bg-my-palegreen'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const megahonImage =
    side === 'provider' ? '/img/hcf_megahon_okuru.png' : '/img/hcf_megahon_uketoru.png'
  return (
    <div className='rounded-lg bg-white p-[84px]'>
      <div className='flex items-center justify-center gap-4'>
        <Image src={megahonImage} alt='image' width={24} height={24}></Image>
        {firstText[0]}
      </div>
      <p>{firstText[1]}</p>
      {goods.map((note, index) => (
        <div key={index} className=''>
          <CircleContents
            headline={note.headline}
            listItems={note.listItems}
            info={note.info}
            bgColor={bgColor}
            bgPaleColor={bgPaleColor}
          />
        </div>
      ))}
      <div className={cn('border-t-2 border-dashed', borderColor)}></div>
      <div className='flex items-center justify-center gap-4'>
        <Image src={megahonImage} alt='image' width={24} height={24}></Image>
        {secondText[0]}
      </div>
      <p>{secondText[1]}</p>
    </div>
  )
}
