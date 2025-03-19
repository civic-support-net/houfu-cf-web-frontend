import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function Headline({
  headline,
  headlineTail,
  tailColor,
  image,
}: {
  headline: string
  headlineTail: string
  tailColor: string
  image: string
}) {
  return (
    <div className='mb-sp-6 flex flex-col lg:mb-pc-6'>
      <div className='relative mx-auto max-w-screen-lg text-right'>
        <div className='relative pt-[60px] lg:pt-[80px]'>
          <div className='absolute right-[10%] top-0 z-0 aspect-square w-[80px] lg:w-[100px]'>
            <Image src={image} alt='' fill className='animate-myspina' />
          </div>
          <h1 className='relative z-10 w-full rounded-sp border-4 border-my-dark bg-white p-[0.5em] text-center text-sp-h1 lg:rounded-pc lg:px-[1.3em] lg:py-[0.5em] lg:text-pc-h1'>
            {headline}
            <br className='lg:hidden' />
            <span className={cn('', tailColor)}>{headlineTail}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
