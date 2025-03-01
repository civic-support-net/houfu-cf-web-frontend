import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Map({ side }: { side: 'provider' | 'recipient' }) {
  //const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'
  const bgColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const bgPaleColor = side === 'provider' ? 'bg-my-palered' : 'bg-my-palegreen'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const mapImagePC =
    side === 'provider' ? '/img/hcf_okuru_map-2f_pc.png' : '/img/hcf_uketoru_map-1f_pc.png'
  const mapImageSP =
    side === 'provider' ? '/img/hcf_okuru_map-2f_sp.png' : '/img/hcf_uketoru_map-1f_sp.png'
  return (
    <div
      className={cn(
        'flex justify-center rounded-sp border-2 lg:rounded-pc',
        bgPaleColor,
        borderColor,
      )}
    >
      <Image
        src={cn('', mapImageSP)}
        className='inline-block lg:hidden'
        alt='map'
        width={100}
        height={100}
        layout='responsive'
      />
      <Image
        src={cn('', mapImagePC)}
        className='hidden lg:inline-block'
        alt='map'
        width={100}
        height={100}
        layout='responsive'
      />
    </div>
  )
}
