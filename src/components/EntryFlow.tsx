import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'

interface RoundedSquareProps {
  circleText: number
  side: 'provider' | 'recipient'
}

const RoundedSquare: React.FC<RoundedSquareProps> = ({ circleText, side }) => {
  const color = side === 'provider' ? '#E95513' : '#1EAA39'
  return (
    <div className='w-[200px] h-[200px] bg-white rounded-[20px] border-2 border-black relative'>
      <div
        className='w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full border-2 border-black absolute top-[-8px] left-[-8px] flex items-center justify-center'
        style={{ backgroundColor: color }}
      >
        <p className='text-white text-center text-'>{circleText}</p>
      </div>
      <p className='text-gray-400 text-center relative top-1/2 transform -translate-y-1/2 text-[22px] p-[10px]'>
        写真・イラストが入ります。
      </p>
    </div>
  )
}

type RoundedRectangleProps = {
  // link プロパティを追加
  side : 'provider' | 'recipient'
  color: string
  texts: string[]
  link: string // link プロパティを追加
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ side, texts }) => {
  const borderColor = side === 'provider' ? 'border-[#E95513]' : 'border-[#1EAA39]'
  const textColor = side === 'provider' ? 'text-[#E95513]' : 'text-[#1EAA39]'

  return (
    <Link href='/' className={classNames('rounded-full border-2 bg-white px-4 py-2 lg:px-8 lg:py-4', borderColor, textColor)}>
      <div className='flex flex-col items-center border-color text-[18px] tracking-wider md:flex-row lg:text-[24px]' >
        <span >{texts[0]}</span>
        <span>{texts[1]}</span>
      </div>
    </Link>
  )
}
export default function EntryFlow({ side }: { side: 'provider' | 'recipient' }) {

  const topText =
    side === 'provider'
      ? ['フードプレゼンター','として', '品物をおくる!']
      : ['うけとりメンバー','として', '品物をうけとる!']

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

  const styleUnderline: React.CSSProperties = {
    textDecoration: 'underline',
    textDecorationColor: side === 'provider' ? '#E95513' : '#1EAA39',
    textUnderlineOffset: '4px',
    textDecorationThickness: '3px',
  }
  
  return <div className='flex-col md:flex-row'>
    <div className='mx-auto flex flex-col items-center justify-center gap-y-[100px] md:max-w-[768px]'>
      <div className='mx-auto flex items-center gap-x-4'>
        <Image src= '/img/hcf_hukidashi.png' alt = "" width = "75" height = "50"></Image>
        <div className='flex flex-col text-center item-center mx-auto gap-y-2 text-2xl'> 
          <div className='flex flex-col md:flex-row'>
            <p >{topText[0]}</p>
            <p >{topText[1]}</p>
          </div>
          <p >{topText[2]}</p>
        </div>
        <Image src= '/img/hcf_hukidashi.png' alt = "" width = "75" height = "50" className='transform scale-y-[-1] rotate-180'></Image>
      </div>

      <div className='flex flex-col justify-center gap-y-[28px] md:flex-row md:gap-x-[44px]'>
        {flowContents.map(({ label, text }, index) => (
          <div key={index} className='flex max-w-[200px] flex-col items-center gap-y-4 break-words'>
            <RoundedSquare circleText={index + 1} side = {side}/>
            <p className='items-center text-center text-base' style={styleUnderline}>
              {label}
            </p>
            <p className='text-left text-base'>{text}</p>
          </div>
        ))}
      </div>
      <div className='flex size-full justify-center'>
        <RoundedRectangle
          side={side}
          texts={side === 'provider'
            ? ['フードプレゼンター','登録をする']
            : ['うけとりメンバー','登録の予約をする']}
          link={side === 'provider' ? 'https://hofu.communityfridge.jp/personal-form/?fbclid=IwAR0BV0L4h1tvkVPkdDtuqYRxeUaww-m2DEc6DrYVvrac_RkAZV57HxN4Prc' : 'tel:0835-24-7744'} color={''}        />
      </div>
    </div>
  </div>
}

