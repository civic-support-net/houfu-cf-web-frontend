import { cn } from '@/lib/utils'

export default function FlagHeadline({
  headline,
  textColor,
  bgColor,
}: {
  headline: string
  textColor: string
  bgColor: string
}) {
  return (
    <div
      className={cn(
        'relative inline-block rounded-sp p-[12px] md:rounded-none',
        bgColor,
        textColor,
      )}
    >
      <div
        className={cn(
          'absolute right-1 top-0 z-10 hidden aspect-[2/3] h-full translate-x-full bg-white md:block',
          bgColor,
        )}
        // style={{ clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 20% 50%, 100% 100%, 0 100%)' }}
      ></div>
      <h2 className='text-lg font-bold md:text-[28px]'>{headline}</h2>
    </div>
  )
}
