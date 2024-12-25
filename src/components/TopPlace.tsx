import { render } from 'react-dom'

import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

export default function TopPlace() {
  return (
    <div className='space-y-[44px] bg-white p-[44px] md:space-y-[88px] md:p-[88px]'>
      <div className='space-y-[24px]'>
        <FlagHeadline
          headline='防府コミュニティフリッジはルルサス防府に設置中'
          bgColor='bg-my-yellow'
          textColor='text-black'
        />
        <p>
          防府コミュニティフリッジは、あたたかい想いがあつまった、みんなが笑顔になれる場所です。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。まだ未確定の文章が続きます。
        </p>
      </div>

      <div className='flex flex-col gap-[22px] md:flex-row md:gap-[44px]'>
        <Place
          label='食料品や日用品をおくる'
          hours='10:00〜17:00'
          phoneNumber='0835-24-7744'
          note='火曜、年末年始を除く'
          buttonText='おくる場所'
          textColor='text-my-red'
          bgColor='bg-my-palered'
          borderColor='border-my-red'
        />
        <Place
          label='食料品や日用品をうけとる'
          hours='8:00〜21:30'
          phoneNumber='0835-24-7744'
          note='火曜、年末年始を除く'
          buttonText='うけとる場所'
          textColor='text-my-green'
          bgColor='bg-my-palegreen'
          borderColor='border-my-green'
        />
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

const Place = ({
  label,
  hours,
  phoneNumber,
  note,
  buttonText,
  textColor,
  bgColor,
  borderColor,
}: {
  label: string
  hours: string
  phoneNumber: string
  note: string
  buttonText: string
  textColor: string
  bgColor: string
  borderColor: string
}) => {
  return (
    <div
      className={cn('flex-1 space-y-[24px] rounded-sp p-[28px] md:rounded-pc md:p-[44px]', bgColor)}
    >
      <p>{label}</p>
      <div>
        <div>
          <div>受付時間</div>
          <div>{hours}</div>
        </div>
        <div>
          <div>お問い合わせ先</div>
          <div>{phoneNumber}</div>
        </div>
      </div>
      <p>{note}</p>
      <button className={cn(textColor, borderColor)}>{buttonText}</button>
    </div>
  )
}
