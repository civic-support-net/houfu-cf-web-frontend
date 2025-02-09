import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface RoundedSquareProps {
  circleText: number
  side: 'provider' | 'recipient'
}

const RoundedSquare: React.FC<RoundedSquareProps> = ({ circleText, side }) => {
  const color = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  return (
    <div className='relative size-[200px] rounded-sp border-2 border-black bg-white'>
      <div
        className={classNames(
          'absolute left-[-8px] top-[-8px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-black md:h-[36px] md:w-[36px]',
          color,
        )}
      >
        <p className='text- text-center text-white'>{circleText}</p>
      </div>
      <p className='relative top-1/2 -translate-y-1/2 p-[10px] text-center text-[22px] text-gray-400'>
        写真・イラストが入ります。
      </p>
    </div>
  )
}

type RoundedRectangleProps = {
  // link プロパティを追加
  side: 'provider' | 'recipient'
  texts: string[]
  link: string // link プロパティを追加
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ side, texts, link }) => {
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'

  return (
    <Link
      href={link}
      className={classNames(
        'rounded-full border-2 bg-white px-4 py-2 lg:px-8 lg:py-4',
        borderColor,
        textColor,
      )}
    >
      <div className='flex flex-col items-center text-[18px] tracking-wider md:flex-row lg:text-[24px]'>
        <span>{texts[0]}</span>
        <span>{texts[1]}</span>
      </div>
    </Link>
  )
}
export default function EntryFlow({ side }: { side: 'provider' | 'recipient' }) {
  const topText =
    side === 'provider'
      ? ['フードプレゼンター', 'として', '品物をおくる!']
      : ['うけとりメンバー', 'として', '品物をうけとる!']

  const flowContents =
    side === 'provider'
      ? [
          {
            label: 'フードプレゼンター登録',
            image: '',
            text: '下記ボタンよりフードプレゼンター登録をお願いします。',
          },
          {
            label: '品物のお持ち込み',
            image: '',
            text: 'ルルサス防府2階「防府市市民活動登録センター受付」へ物品をお持ち込みください。',
          },
          {
            label: '確認のあとご提供',
            image: '',
            text: '賞味期限などを確認したあと、防府コミュニティブリッジで品物をご提供します。',
          },
        ]
      : [
          {
            label: '電話で面談予約',
            image: '',
            text: '電話でお問い合わせをしていただき、面談・登録の日時を決めます。',
          },
          {
            label: 'うけとりメンバー登録',
            image: '',
            text: 'ご利用前に面談してから、うけとりメンバー登録のお手続き・ご利用方法の説明をします。',
          },
          {
            label: '自由にうけとり',
            image: '',
            text: 'お手持ちのスマートフォンに電子ロックの鍵を登録し、鍵を使って8:00〜21:30の間は間は自由にうけとりにいけます',
          },
        ]

  const textLine = side === 'provider' ? 'decoration-my-red' : 'decoration-my-green'

  return (
    <div className='flex-col md:flex-row'>
      <div className='mx-auto flex flex-col items-center justify-center gap-y-[100px] md:max-w-screen-md'>
        <div className='mx-auto flex items-center gap-x-4'>
          <Image src='/img/hcf_hukidashi.png' alt='' width='75' height='50'></Image>
          <div className='mx-auto flex flex-col items-center gap-y-2 text-center text-2xl'>
            <div className='flex flex-col md:flex-row'>
              <p>{topText[0]}</p>
              <p>{topText[1]}</p>
            </div>
            <p>{topText[2]}</p>
          </div>
          <Image
            src='/img/hcf_hukidashi.png'
            alt=''
            width='75'
            height='50'
            className='rotate-180 -scale-y-100'
          ></Image>
        </div>

        <div className='flex flex-col justify-center gap-y-[28px] md:flex-row md:gap-x-[44px]'>
          {flowContents.map(({ label, text }, index) => (
            <div
              key={index}
              className='flex max-w-[200px] flex-col items-center gap-y-4 break-words'
            >
              <RoundedSquare circleText={index + 1} side={side} />
              <p
                className={classNames(
                  'items-center text-center text-base underline underline-offset-4',
                  textLine,
                )}
              >
                {label}
              </p>
              <p className='text-left text-base'>{text}</p>
            </div>
          ))}
        </div>
        <div className='flex size-full justify-center'>
          <RoundedRectangle
            side={side}
            texts={
              side === 'provider'
                ? ['フードプレゼンター', '登録をする']
                : ['うけとりメンバー', '登録の予約をする']
            }
            link={
              side === 'provider'
                ? 'https://hofu.communityfridge.jp/personal-form/?fbclid=IwAR0BV0L4h1tvkVPkdDtuqYRxeUaww-m2DEc6DrYVvrac_RkAZV57HxN4Prc'
                : 'tel:0835-24-7744'
            }
          />
        </div>
      </div>
    </div>
  )
}
