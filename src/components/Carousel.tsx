'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

export type Flag = {
  imageUrl: string
  textColor: string
  isInvertImage: boolean
}

type CarouselProps = {
  flags: Flag[]
  options?: {
    loop?: boolean
    direction?: 'ltr' | 'rtl'
  }
  plugins?: {
    speed?: number
  }
}

const Carousel: React.FC<CarouselProps> = ({ flags, options = {}, plugins = {} }) => {
  const { loop = true, direction = 'ltr' } = options
  const { speed = 1 } = plugins
  const [emblaRef] = useEmblaCarousel(
    {
      loop,
      direction,
      watchDrag: false,
    },
    [AutoScroll({ playOnInit: true, speed })],
  )

  return (
    <div className='w-[120%] overflow-x-hidden' ref={emblaRef}>
      <ul className='flex w-full'>
        {flags.map((flag, index) => (
          <li key={index} className={cn('relative', flag.textColor)}>
            <svg
              id='assets'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 176'
              className={cn('absolute z-0', flag.textColor)}
            >
              <path
                d='M256,0H0v4h8v166.866c0,2.831,2.306,5.134,5.139,5.134,1.364,0,2.649-.535,3.62-1.506l14.574-14.573,13.771,13.771c1.485,1.486,3.461,2.305,5.562,2.305s4.077-.818,5.562-2.305l13.771-13.771,13.771,13.771c1.485,1.486,3.461,2.305,5.562,2.305s4.076-.818,5.562-2.305l13.771-13.771,13.771,13.771c1.485,1.486,3.461,2.305,5.562,2.305s4.077-.818,5.562-2.305l13.771-13.771,13.771,13.771c1.485,1.486,3.461,2.305,5.562,2.305s4.077-.818,5.562-2.305l13.771-13.771,13.771,13.771c1.485,1.486,3.461,2.305,5.562,2.305s4.076-.818,5.562-2.305l13.771-13.771,14.574,14.573c.971.971,2.256,1.506,3.619,1.506h0c1.311,0,2.561-.493,3.519-1.389,1.029-.962,1.62-2.327,1.62-3.745V4h8V0Z'
                fill='#3e3a39'
                strokeWidth='0'
              />
              <path
                d='M12,4v166.867c0,1.008,1.218,1.512,1.931.8l14.668-14.668c1.51-1.51,3.958-1.51,5.468,0l13.865,13.865c1.51,1.51,3.958,1.51,5.468,0l13.865-13.865c1.51-1.51,3.958-1.51,5.468,0l13.865,13.865c1.51,1.51,3.958,1.51,5.468,0l13.865-13.865c1.51-1.51,3.958-1.51,5.468,0l13.865,13.865c1.51,1.51,3.958,1.51,5.468,0l13.865-13.865c1.51-1.51,3.958-1.51,5.468,0l13.865,13.865c1.51,1.51,3.958,1.51,5.468,0l13.865-13.865c1.51-1.51,3.958-1.51,5.468,0l13.865,13.865c1.51,1.51,3.958,1.51,5.468,0l13.865-13.865c1.51-1.51,3.958-1.51,5.468,0l14.668,14.668c.712.712,1.931.208,1.931-.8V4H12Z'
                fill='currentColor'
                strokeWidth='0'
              />
            </svg>
            <div
              className='relative size-full h-[132px] w-[192px]
            md:h-[176px] md:w-[256px]'
            >
              <Image
                src={flag.imageUrl}
                alt=''
                width={200}
                height={120}
                className={cn(
                  'mx-auto mt-[4px] h-[115px] w-[170px] md:mt-[6px] md:h-[138px] md:w-[230px]',
                  flag.isInvertImage && 'invert',
                )}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
