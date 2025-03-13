import { Phone, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Button({
  texts,
  href,
  side,
  isExternal = false,
  isTel = false,
}: {
  texts: string[]
  href: string
  side: 'provider' | 'recipient'
  isExternal?: boolean
  isTel?: boolean
}) {
  const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const hoverBgColor = side === 'provider' ? 'hover:bg-my-palered' : 'hover:bg-my-palegreen'

  return (
    <Link
      href={href}
      // 個別指定
      className={cn(
        'flex flex-col items-center rounded-full border-2 bg-white px-[1.5rem] py-[1em] text-[1rem] lg:flex-row lg:px-[2rem] lg:py-[1rem] lg:text-[1.5rem] lg:leading-[1.5]',
        textColor,
        borderColor,
        hoverBgColor,
      )}
      target={isExternal ? '_blank' : ''}
    >
      {texts.map((text, index) => (
        <span key={index} className='flex items-center gap-x-1 leading-6'>
          {text}
          {index === texts.length - 1 && isExternal && <SquareArrowOutUpRight />}
          {index === texts.length - 1 && isTel && <Phone className='-scale-x-100' />}
        </span>
      ))}
    </Link>
  )
}
