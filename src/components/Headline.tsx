import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function Headline({
  headline,
  headlineColor,
  color,
  bgImage,
}: {
  headline: string
  headlineColor: string
  color: string
  bgImage: string
}) {
  return (
    <div className='mb-[84px] mt-[168px] flex flex-col'>
      <div className='relative mx-auto text-right'>
        <div className={cn('bg-contain bg-right bg-no-repeat pt-[60px]', bgImage)}>
          <h1 className='rounded-sp border-[3px] border-my-dark bg-white p-[12px] text-center text-3xl md:rounded-pc md:px-[52px] md:py-[24px]'>
            {headline}
            <br className='md:hidden' />
            <span className={cn('', color)}>{headlineColor}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
