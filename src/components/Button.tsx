import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Button({
  href,
  text,
  side,
}: {
  href: string
  text: string
  side: 'provider' | 'recipient'
}) {
  const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'

  return (
    <Link
      href={href}
      // 個別指定
      className={cn(
        'inline-block rounded-full border-2 bg-white px-[1.5rem] py-[1em] text-[1rem] lg:px-[2rem] lg:py-[1rem] lg:text-[1.5rem] lg:leading-[1.5]',
        textColor,
        borderColor,
      )}
    >
      {text}
    </Link>
  )
}
