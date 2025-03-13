import Image from 'next/image'

import Button from '@/components/Button'
import { cn } from '@/lib/utils'

export default function EntryFlow({ side }: { side: 'provider' | 'recipient' }) {
  const topTexts =
    side === 'provider'
      ? [['フード', 'プレゼンター', 'に登録して'], ['エールをおくる!']]
      : [
          ['うけとりメンバー', '登録をして'],
          ['エールを', 'うけとる!'],
        ]

  const flowContents =
    side === 'provider'
      ? [
          {
            label: 'フードプレゼンター登録',
            image: '/img/hcf_okuru_flow1.png',
            text: '下記ボタンよりフードプレゼンター登録をお願いします。',
          },
          {
            label: '品物のお持ち込み',
            image: '/img/hcf_okuru_flow2.png',
            text: 'ルルサス防府2階「防府市市民活動支援センター気付」へ品物をお持ち込みください。',
          },
          {
            label: '確認のあとご提供',
            image: '/img/hcf_okuru_flow3.png',
            text: '賞味期限などを確認したあと、防府コミュニティフリッジで品物をご提供します。',
          },
        ]
      : [
          {
            label: '電話で面談予約',
            image: '/img/hcf_uketoru_flow1.png',
            text: 'ご利用前に面談があります。電話でお問い合わせをしていただき、面談・登録の日時を決めます。',
          },
          {
            label: 'うけとりメンバー登録',
            image: '/img/hcf_uketoru_flow2.png',
            text: '面談のあと、うけとりメンバー登録・お手持ちのスマートフォンへの電子ロック登録・ご利用方法の説明をします。',
          },
          {
            label: '自由にうけとり',
            image: '/img/hcf_uketoru_flow3.png',
            text: 'お手持ちのスマートフォンに登録した電子ロックを使って、8:00〜21:30の間は自由にうけとりに行けます。',
          },
        ]

  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const bgColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const button =
    side === 'provider' ? (
      <Button
        texts={['フードプレゼンター', '登録をする']}
        href='https://hofu.communityfridge.jp/personal-form/?fbclid=IwAR0BV0L4h1tvkVPkdDtuqYRxeUaww-m2DEc6DrYVvrac_RkAZV57HxN4Prc'
        side={side}
        isExternal={true}
      />
    ) : (
      <Button
        texts={['うけとりメンバー', '登録の予約をする']}
        href='tel:0835-24-7744'
        side={side}
        isTel={true}
      />
    )

  return (
    <div className='mx-auto flex max-w-screen-md flex-col px-sp-3 py-sp-6 lg:flex-row lg:px-0 lg:py-pc-6'>
      <div className='mx-auto flex flex-col items-center justify-center gap-y-sp-6 lg:max-w-screen-lg lg:gap-y-pc-6'>
        {/* 表題 */}
        <div className='mx-auto flex items-center gap-x-[0.4em] lg:gap-x-[1em]'>
          <Image
            src='/img/hcf_hukidashi.png'
            alt=''
            width='60'
            height='72'
            className='h-[48px] w-pc-5 lg:h-[72px] lg:w-[60px]'
          ></Image>
          <div className='mx-auto flex flex-col items-center gap-y-2 text-center text-sp-h3 lg:text-pc-h2'>
            <div className='flex flex-col lg:flex-row'>
              {topTexts[0].map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              {topTexts[1].map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <Image
            src='/img/hcf_hukidashi.png'
            alt=''
            width='60'
            height='72'
            className='h-[48px] w-pc-5 rotate-180 -scale-y-100 lg:h-[72px] lg:w-[60px]'
          ></Image>
        </div>

        {/* フロー３つ */}
        <div className='flex flex-col gap-y-sp-5 lg:flex-row lg:gap-x-pc-5'>
          {flowContents.map(({ label, text, image }, index) => (
            <div key={index} className='flex w-[200px] flex-col items-center gap-y-sp-4 lg:w-full'>
              <div className='relative aspect-square w-full rounded-sp border-2 border-black bg-white lg:rounded-pc'>
                <div
                  className={cn(
                    'absolute left-[-8px] top-[-8px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-black lg:h-[36px] lg:w-[36px]',
                    bgColor,
                  )}
                >
                  <p className='text-center text-sp-p text-white lg:text-pc-p'>{index + 1}</p>
                </div>
                <div className='relative flex size-full items-center justify-center'>
                  <Image src={image} alt='' width={150} height={150} className='' />
                </div>
              </div>

              <p
                className={cn(
                  'items-center border-b-2 pb-[2px] text-center text-sp-h4 lg:text-pc-h4',
                  borderColor,
                )}
              >
                {label}
              </p>
              <p className='text-left text-sp-p2 lg:text-pc-p2 '>{text}</p>
            </div>
          ))}
        </div>

        {/* ボタン */}
        <div className='flex justify-center'>{button}</div>
      </div>
    </div>
  )
}
