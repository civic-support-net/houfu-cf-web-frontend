'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

export type Flag = {
  imageUrl: string
  bgColor: string
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
    <div className='w-[120%] overflow-hidden border-t-[3px] border-black' ref={emblaRef}>
      <ul className='flex w-full'>
        {flags.map((flag, index) => (
          <li key={index} className={cn('clip-wavy mx-[10.5px] lg:mx-[14px]', flag.bgColor)}>
            <div
              className='relative size-full h-[132px] w-[192px] p-[21px]
            md:h-[176px] md:w-[256px] lg:p-[28px]'
            >
              <Image
                src={flag.imageUrl}
                alt=''
                width={200}
                height={120}
                className={cn(
                  'h-[90px] w-[150px] md:h-[120px] md:w-[200px]',
                  flag.isInvertImage && 'invert',
                )}
              />
            </div>
            <div className='h-7' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
