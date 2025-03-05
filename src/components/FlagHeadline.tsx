import { cn } from '@/lib/utils'

export default function FlagHeadline({
  headlines,
  textColor,
  bgColor,
}: {
  headlines: string[]
  textColor: string
  bgColor: string
}) {
  return (
    <div
      className={cn(
        'relative mx-auto mb-[1em] inline-block w-full rounded-sp py-sp-2 lg:w-fit lg:rounded-none lg:px-pc-2',
        bgColor,
        textColor,
      )}
    >
      <div
        className={cn(
          'absolute right-1 top-0 z-10 hidden aspect-[2/3] h-full translate-x-full bg-white lg:block',
          bgColor,
        )}
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 20% 50%, 100% 100%, 0 100%)' }}
      ></div>
      <h2 className='flex flex-col text-center text-sp-h2 font-bold md:text-pc-h2 lg:flex-row'>
        {headlines.map((h, idx) => (
          <span key={idx}>{h}</span>
        ))}
      </h2>
    </div>
  )
}
