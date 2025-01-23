import Image from 'next/image'

export default function MegaphoneHeadline({
  side,
  headlines,
}: {
  side: 'provider' | 'recipient'
  headlines: string[]
}) {
  const megaphoneImage =
    side === 'provider' ? '/img/hcf_megahon_okuru.png' : '/img/hcf_megahon_uketoru.png'

  return (
    <div className='flex items-center justify-center gap-4'>
      <Image src={megaphoneImage} alt='image' width={24} height={24}></Image>
      <h3 className='flex flex-col text-[18px] md:flex-row'>
        {headlines.map((headline, index) => (
          <span key={index}>{headline}</span>
        ))}
      </h3>
    </div>
  )
}
