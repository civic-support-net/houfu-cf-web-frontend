import FlagHeadline from '@/components/FlagHeadline'

export default function ProviderMethod() {
  return (
    <div className='h-[800px] bg-my-palered p-[88px]'>
      <FlagHeadline
        headline='想いをおくる方法は他にもあります'
        bgColor='bg-my-red'
        textColor='text-white'
      />
      <p>文章・・・・</p>
    </div>
  )
}
