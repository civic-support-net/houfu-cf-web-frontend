import Link from 'next/link'

interface RoundedSquareProps {
  circleText: number
  color: string
}

const RoundedSquare: React.FC<RoundedSquareProps> = ({ circleText,color }) => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '2px solid black',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-8px',
          left: '-8px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: color,
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
        }}
      >
        {circleText}
      </div>
      <p
        style={{
          color: 'gray',
          textAlign: 'center',
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '22px',
          padding: '10px',
        }}
      >
        写真・イラストが入ります。
      </p>
    </div>
  )
}

type RoundedRectangleProps = {
  // link プロパティを追加
  color: string
  text: string
  link: string // link プロパティを追加
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ color, text, link }) => {
  return (
    <div
      style={{
        width: `75%`,
        height: `75px`,
        borderRadius: `100px`,
        backgroundColor: `white`,
        border: `2px solid black`,
        borderColor: `${color}`,
        color: `${color}`,
        position: 'relative',
      }}
    >
      <p
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          fontSize: '18px',
          textAlign: 'center',
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {text}
      </p>
      <Link href={link}></Link>
    </div>
  )
}

const renderRoleText = ({ side }: { side: 'provider' | 'recipient' }) => {
  const topText =
    side === 'provider'
      ? 'フードプレゼンターとして品物をおくる!'
      : 'うけとりメンバーとして品物をうけとる!'

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

  return (
    <div className='mx-auto flex flex-col items-center justify-center gap-y-[100px] md:max-w-[768px]'>
      <div className='mx-auto flex text-center md:text-2xl'>
        <p className='text-center'>{topText}</p>
      </div>

      <div className='flex flex-col justify-center gap-y-[28px] md:flex-row md:gap-x-[44px]'>
        {flowContents.map(({ label, text }, index) => (
          <div key={index} className='flex max-w-[200px] flex-col items-center gap-y-4 break-words'>
            <RoundedSquare circleText={index + 1}color={side === 'provider' ? '#E95513' : '#1EAA39'} />
            <p className='items-center text-center text-base' style={styleUnderline}>
              {label}
            </p>
            <p className='text-left text-base'>{text}</p>
          </div>
        ))}
      </div>
      <div className='flex size-full justify-center'>
        <RoundedRectangle
          color={side === 'provider' ? '#E95513' : '#1EAA39'}
          text={
            side === 'provider'
              ? 'フードプレゼンター登録をする'
              : 'うけとりメンバー登録の予約をする'
          }
          link={side === 'provider' ? '/provider' : '/recipient }'}
        />
      </div>
    </div>
  )
}

export default function EntryFlow() {
  return <div className='flex-col md:flex-row'>{renderRoleText({ side: 'recipient' })}</div>
}
