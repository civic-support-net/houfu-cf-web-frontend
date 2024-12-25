import Image from 'next/image'

import Button from '@/components/Button'
import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

export default function TopIntroduction() {
  return (
    <div className='space-y-[44px] bg-white p-[44px] md:space-y-[88px] md:p-[88px]'>
      {renderIllustIntro()}
      <div className='relative pb-[24px] md:pb-[44px]'>
        {renderRoleIntro({
          labelHead: '食料品や日用品をおくる',
          labelImage1: '/img/hcf_giving.png',
          labelImage2: '/img/hcf_food.png',
          textColor: 'text-my-red',
          bgColor: 'bg-my-red',
          bgPaleColor: 'bg-my-palered',
          borderColor: 'border-my-red',
          text: 'ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。',
          linkText: 'おくる方法を見る',
          linkHref: '/#',
          illustImage: '/img/hcf_topokuru.png',
          topRightImage: '/img/hcf_okuruillust_1.png',
          bottomLeftImage: '/img/hcf_okuruillust_2.png',
          isBackgroundFitLeft: true,
        })}
      </div>
      <div className='relative pb-[44px]'>
        {renderRoleIntro({
          labelHead: '食料品や日用品をうけとる',
          labelImage1: '/img/hcf_taking.png',
          labelImage2: '/img/hcf_food.png',
          textColor: 'text-my-green',
          bgColor: 'bg-my-green',
          bgPaleColor: 'bg-my-palegreen',
          borderColor: 'border-my-green',
          text: 'ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。',
          linkText: 'うけとる方法を見る',
          linkHref: '/#',
          illustImage: '/img/hcf_topuketoru.png',
          topRightImage: '/img/hcf_uketoruillust_1.png',
          bottomLeftImage: '/img/hcf_kyoutsuillust_green.png',
          isBackgroundFitLeft: false,
        })}
      </div>
    </div>
  )
}

{
  /* ハートのイラストと導入文章 */
}
const renderIllustIntro = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[28px] md:flex-row-reverse md:gap-[44px]'>
      <div className='w-full md:w-2/5'>
        <div className='relative mx-auto aspect-[8/5]'>
          <Image
            src='/img/hcf_topillust.png'
            alt='ハートを渡すイラスト'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='w-full space-y-[24px] md:w-3/5'>
        <h1 className='text-center text-3xl font-bold tracking-wider md:text-left'>
          「がんばれ!」
          <br className='md:hidden' />
          「ありがとう!」
          <br />
          防府コミュニティフリッジは
          <br />
          みんなのえがおが集まる場所。
        </h1>
        <p className=''>
          コミュニティブリッジとは食料品や日用品をおくったり、買いたものを
          うけとることができるみんなのおおきな冷蔵庫です。
        </p>
        <p className=''>
          だれかが立ち止まったとき、みんなで背中を押せるように「困ったと
          きはお互いさま」のキモチを応援しています。
        </p>
      </div>
    </div>
  )
}

{
  /*２つの立場のイラストと導入文章 */
}
const renderRoleIntro = ({
  labelHead,
  labelImage1,
  labelImage2,
  textColor,
  bgColor,
  bgPaleColor,
  borderColor,
  text,
  linkText,
  linkHref,
  illustImage,
  topRightImage,
  bottomLeftImage,
  isBackgroundFitLeft,
}: {
  labelHead: string
  labelImage1: string
  labelImage2: string
  textColor: string
  bgColor: string
  bgPaleColor: string
  borderColor: string
  text: string
  linkText: string
  linkHref: string
  illustImage: string
  topRightImage: string
  bottomLeftImage: string
  isBackgroundFitLeft: boolean // 背景の左右寄せフラグ
}) => {
  return (
    <div className='relative'>
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-[28px] p-[44px] md:flex-row-reverse md:gap-[44px] md:p-[88px]',
          bgPaleColor,
          isBackgroundFitLeft
            ? '-ml-[44px] -mr-[28px] rounded-r-sp pl-[44px] md:-ml-[88px] md:rounded-r-pc'
            : '-ml-[28px] -mr-[44px] rounded-l-sp pr-[44px] md:-mr-[88px] md:rounded-l-pc',
        )}
      >
        <div className='w-full md:w-2/5'>
          <div className='relative mx-auto aspect-[13/9]'>
            <Image src={illustImage} alt='' fill className='object-contain' />
          </div>
        </div>

        <div className='flex w-full flex-col items-center space-y-[32px] md:w-3/5 md:items-start md:space-y-[40px]'>
          <FlagHeadline headline={labelHead} bgColor={bgColor} textColor='text-white' />
          <div className='relative flex flex-col items-center gap-[24px] md:flex-row'>
            <Image
              src={labelImage1}
              alt=''
              width={804}
              height={120}
              className='aspect-[4/1] max-w-[85%] object-contain md:max-w-[50%]'
            />
            <Image
              src={labelImage2}
              alt=''
              width={546}
              height={120}
              className='aspect-[4/1] max-w-[65%] object-contain md:max-w-[38%]'
            />
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className='absolute bottom-[-24px] z-20 w-full md:bottom-[-42px]'>
        <div className='flex justify-center'>
          <Button
            href={linkHref}
            text={linkText}
            textColor={textColor}
            bgColor='bg-white'
            borderColor={borderColor}
          />
        </div>
      </div>
      <div className='absolute right-0 top-[-22px] z-10 aspect-[10/9] w-[60px] md:right-[42px] md:top-[-42px] md:w-[80px]'>
        <Image src={topRightImage} fill alt='' className='' />
      </div>
      <div className='absolute bottom-[-22px] left-0 z-10 aspect-[10/9] w-[60px] md:bottom-[-42px] md:left-[42px] md:w-[80px]'>
        <Image src={bottomLeftImage} fill alt='' className='' />
      </div>
    </div>
  )
}
