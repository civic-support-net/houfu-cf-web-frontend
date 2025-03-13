import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function Map({ side }: { side: 'provider' | 'recipient' }) {
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const mapImagePC =
    side === 'provider' ? '/img/hcf_okuru_map-2f_pc.png' : '/img/hcf_uketoru_map-1f_pc.png'
  const mapImageSP =
    side === 'provider' ? '/img/hcf_okuru_map-2f_sp.png' : '/img/hcf_uketoru_map-1f_sp.png'
  return (
    <div className={cn('relative rounded-sp border-2 py-sp-5 lg:rounded-pc lg:py-0', borderColor)}>
      <div className={cn('relative aspect-[3/2] w-full lg:aspect-[2/1] ')}>
        <Image
          src={mapImageSP}
          className='inline-block lg:hidden'
          alt='おくる側のフロアマップ'
          fill
        />
        <Image
          src={mapImagePC}
          className='hidden lg:inline-block'
          alt='うけとる側のフロアマップ'
          fill
        />
      </div>
      <div className='absolute -bottom-sp-5 right-sp-1 z-10 aspect-[240/345] w-pc-5 lg:-bottom-pc-5 lg:-right-pc-5 lg:w-[70px]'>
        <Image src='/img/hcf_fridge.png' fill alt='' />
      </div>
    </div>
  )
}
