import FlagHeadline from '@/components/FlagHeadline'

export default function ProviderFlow() {
  return (
    <div className='h-[800px] bg-white p-[48px] md:p-[88px]'>
      <FlagHeadline
        headline='食べなくなった「ベビーフード」をおくってみませんか？'
        bgColor='bg-my-red'
        textColor='text-white'
      />
    </div>
  )
}
