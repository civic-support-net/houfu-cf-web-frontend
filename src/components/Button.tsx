'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Button({
  href,
  text,
  textColor,
  bgColor,
  borderColor,
}: // onClick,
{
  href: string
  text: string
  textColor: string
  bgColor: string
  borderColor: string
  // onClick: () => void
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block rounded-full border-2 px-[24px] py-[12px] text-[16px] md:px-[36px] md:py-[20px] md:text-[24px]',
        textColor,
        bgColor,
        borderColor,
      )}
    >
      {text}
    </Link>
  )
}
