import { cn } from '@/lib/utils'

export default function Headline({
  headline,
  headlineTail,
  tailColor,
  bgImage,
}: {
  headline: string
  headlineTail: string
  tailColor: string
  bgImage: string
}) {
  return (
    <div className='mb-sp-6 mt-[168px] flex flex-col md:mb-pc-6'>
      <div className='relative mx-auto w-full max-w-screen-lg text-right'>
        <div className={cn('bg-contain bg-right bg-no-repeat pt-[60px]', bgImage)}>
          <h1 className='w-full rounded-sp border-4 border-my-dark bg-white py-[0.5em] text-center text-sp-h1 md:rounded-pc md:px-[1.3em] md:py-[0.5em] md:text-pc-h1'>
            {headline}
            <br className='md:hidden' />
            <span className={cn('', tailColor)}>{headlineTail}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
