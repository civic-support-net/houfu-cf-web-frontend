import FlagHeadline from '@/components/FlagHeadline'

export default function RecipientCasually() {
  return (
    <div className='h-[500px] bg-green-100 p-[88px]'>
      <FlagHeadline
        headlines={['さまざまな', 'お届けものが', 'あります']}
        bgColor='bg-my-green'
        textColor='text-white'
      />
    </div>
  )
}
