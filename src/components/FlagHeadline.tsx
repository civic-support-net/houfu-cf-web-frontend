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
        'relative mx-auto inline-block w-full rounded-sp p-[12px] md:rounded-none',
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
      <h2 className='flex flex-col text-center text-lg font-bold md:flex-row md:text-[28px]'>
        {headlines.map((h, idx) => (
          <span key={idx}>{h}</span>
        ))}
      </h2>
    </div>
  )
}
