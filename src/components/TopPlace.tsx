import Button from '@/components/Button'
import FlagHeadline from '@/components/FlagHeadline'
import MegaphoneHeadline from '@/components/MegaphoneHeadline'
import { cn } from '@/lib/utils'

export default function TopPlace() {
  return (
    <div className='relative space-y-sp-6 bg-white p-sp-6 px-sp-3 md:space-y-pc-6 md:p-pc-6'>
      <div className='px-sp-5 text-sp-p lg:text-pc-p'>
        <FlagHeadline
          headlines={['防府コミュニティ', 'フリッジは', 'ルルサス防府に', 'あります']}
          bgColor='bg-my-yellow'
          textColor='text-black'
        />
        <div className='space-y-sp-1 tracking-widest lg:space-y-pc-1'>
          <p>
            食品・日用品のお持ち込みは、2階防府市市民活動支援センター気付へお越しください。お持ち込みいただく前に、フードプレゼンター登録をお願いいたします。
          </p>
          <p>
            食品・日用品のうけとりは、1階防府コミュニティフリッジへお越しください。うけとりメンバー登録の際にお手持ちのスマートフォンに登録した電子ロックを使って自由にうけとることができます。
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-sp-5 lg:flex-row lg:gap-pc-5'>
        <Place side='provider' />
        <Place side='recipient' />
      </div>

      <div className='w-full overflow-hidden rounded-sp md:rounded-pc'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.7056461562634!2d131.56958969486874!3d34.05379883118476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354492927e57d731%3A0xe60977ea2c4b3027!2z44Or44Or44K144K5IOmYsuW6nA!5e0!3m2!1sja!2sjp!4v1734958646117!5m2!1sja!2sjp'
          width='100%'
          height='450'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}

const Place = ({ side }: { side: 'provider' | 'recipient' }) => {
  const labels = side === 'provider' ? ['食品や日用品を', 'おくる'] : ['食品や日用品を', 'うけとる']
  const hours = side === 'provider' ? '10:00〜17:00' : '8:00〜21:30'
  const linkText = side === 'provider' ? 'おくる場所' : 'うけとる場所'
  const linkHref = side === 'provider' ? '/provider/#place' : '/recipient/#place'
  const bgColor = side === 'provider' ? 'bg-my-palered' : 'bg-my-palegreen'
  const rectColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const restDays = side === 'provider' ? '※火曜、年末年始を除く' : '※年中無休'

  return (
    <div
      className={cn(
        'w-full space-y-sp-5 rounded-sp p-sp-5 lg:space-y-sp-5 lg:rounded-pc lg:p-pc-5',
        bgColor,
      )}
    >
      <MegaphoneHeadline side={side} headlines={labels} />
      <div className='flex flex-col items-center space-y-sp-4 lg:space-y-pc-4'>
        <div className='flex flex-col items-start space-y-sp-4 lg:flex-row lg:space-x-3 lg:space-y-0'>
          <div className='flex space-x-sp-1 lg:flex-col lg:space-x-[24px]'>
            <p>
              <span className={cn('mr-sp-1 inline-block size-4 rounded lg:mr-pc-1', rectColor)} />
              受付時間
            </p>
            <p>{hours}</p>
          </div>
          <div className='flex space-x-sp-1 lg:flex-col lg:space-x-[24px]'>
            <p>
              <span className={cn('mr-sp-1 inline-block size-4 rounded lg:mr-pc-1', rectColor)} />
              お問合せ先
            </p>
            <p>0835-24-7744</p>
          </div>
        </div>
        <p>{restDays}</p>
        <Button texts={[linkText]} href={linkHref} side={side} />
      </div>
    </div>
  )
}
