interface RoundedRectangleProps {
  circleText: string
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ circleText }) => {
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
          backgroundColor: 'orange',
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

const renderRoleText = ({ side }: { side: 'provider' | 'recipient' }) => {
  const topText = side === 'provider' ? 'フードプレゼンター登録に登録してエールをおくる!' : 'うけとりメンバー登録をしてエールをおくる!'
  const leftlabel = side === 'provider' ? '事前登録' : '電話で面談予約'
  const centerlabel = side === 'provider' ? '物品のお持ち込み' : 'うけとりメンバー登録'
  const rightlabel = side === 'provider' ? '確認のあと陳列' : '自由にうけとり'

  const lefttext =
    side === 'provider'
      ? 'まずは、下記ボタンよりフードプレゼンター登録をお願いします。'
      : 'まずは、電話でお問い合わせをしていただき、面談の時間を決めます。'

  const centertext =
    side === 'provider'
      ? 'ルルサス防府2回「防府市市民活動登録センター受付」へ物品をお持ち込みください。'
      : 'ご利用前に面談して、受け取りメンバー登録や、お手続き・ご利用方法の説明をします。'
  const righttext =
    side === 'provider'
      ? '賞味期限などを確認した後抱負コミュニティブリッジへ陳列します。'
      : 'お手持ちのスマートフォンに電子ロックの鍵を登録し、鍵を使って8:00〜21:30の間は'

  const styleUnderline: React.CSSProperties = {
    textDecoration: 'underline',
    textDecorationColor: side === 'provider' ? '#E95513' : '#1EAA39',
    textUnderlineOffset: '4px',
  }

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 md:max-w-[768px]'>
      <div className='mx-auto flex text-center md:text-4xl'>
        <p className='text-center'>{topText}</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-[28px] md:flex-row md:gap-x-[40px]'>
        {[
          { label: leftlabel, text: lefttext, circleText: '1' },
          { label: centerlabel, text: centertext, circleText: '2' },
          { label: rightlabel, text: righttext, circleText: '3' },
        ].map(({ label, text, circleText }, index) => (
          <div key={index} className='flex max-w-[200px] flex-col items-center gap-y-4 break-words'>
            <RoundedRectangle circleText={circleText} />
            <p className='items-center text-center text-base' style={styleUnderline}>
              {label}
            </p>
            <p className='text-left text-base'>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function EntryFlow() {
  return <div className='flex-col md:flex-row'>{renderRoleText({ side: 'provider' })}</div>
}
