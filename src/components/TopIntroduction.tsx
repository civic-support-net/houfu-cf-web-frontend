import Image from 'next/image'

import Button from '@/components/Button'
import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

export default function TopIntroduction() {
  return (
    <div className='space-y-sp-6 bg-white p-sp-6 lg:space-y-pc-6 lg:p-pc-6'>
      {renderIllustIntro()}
      <div className='relative pb-sp-5 lg:pb-pc-5'>
        {renderRoleIntro({
          side: 'provider',
          texts: [
            'ご家庭で使いきれない食品や日用品、規格サイズ外で出荷ができない農作物など、個人・企業関係なくだれでもコミュニティフリッジへ参加することができます。',
            'みなさまからの「おたがいさま」のキモチをコミュニティフリッジを通じて、必要とされているご家庭にお届けします。',
          ],
        })}
      </div>
      <div className='relative pb-sp-5 lg:pb-pc-5'>
        {renderRoleIntro({
          side: 'recipient',
          texts: [
            '防府市在住のひとり親家庭を対象にご利用いただいています。',
            '家庭の事情や仕事の事情など、突然立ち止まってしまうことが誰しもあるかもしれません。そんな時「困ったときはおたがいさま」のキモチで支え合える仕組みを目指しています。',
          ],
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
    <div className='flex flex-col items-center justify-center gap-sp-5 lg:flex-row-reverse lg:gap-pc-5'>
      <div className='w-full lg:w-1/2'>
        <div className='relative mx-auto aspect-[8/5]'>
          <Image
            src='/img/hcf_topillust.png'
            alt='ハートを渡すイラスト'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='w-full space-y-[1em] lg:w-1/2'>
        {/* 固有フォント */}
        <h2 className='text-center text-[1.75rem] font-bold tracking-wider lg:text-left lg:text-[2rem] lg:leading-normal'>
          「がんばれ!」
          <br className='md:hidden' />
          「ありがとう!」
          <br />
          防府コミュニティ
          <br className='md:hidden' />
          フリッジは
          <br />
          みんなのえがおが
          <br className='md:hidden' />
          集まる場所。
        </h2>

        <div className='space-y-sp-1 text-sp-p lg:space-y-pc-1 lg:text-pc-p'>
          <p>
            コミュニティフリッジとは、地域みんなのおおきな冷蔵庫です。食品や日用品をおくることや、届いた品物をうけとることができます。
          </p>
          <p>
            だれかが立ち止まった時、みんなで背中を押せるよう「困ったときはおたがいさま」のキモチを応援しています。
          </p>
        </div>
      </div>
    </div>
  )
}

{
  /*２つの立場のイラストと導入文章 */
}
const renderRoleIntro = ({ side, texts }: { side: 'provider' | 'recipient'; texts: string[] }) => {
  const isProvider = side === 'provider'
  // sideによって、色や画像を切り分ける
  const labelHeads = isProvider ? ['食品や日用品を', 'おくる'] : ['食品や日用品を', 'うけとる']
  const labelImage1 = isProvider ? '/img/hcf_giving.png' : '/img/hcf_taking.png'
  const labelImage2 = '/img/hcf_food.png'
  const bgColor = isProvider ? 'bg-my-red' : 'bg-my-green'
  const bgPaleColor = isProvider ? 'bg-my-palered' : 'bg-my-palegreen'
  const linkText = isProvider ? 'おくる方法を見る' : 'うけとる方法を見る'
  const linkHref = isProvider ? '/provider' : '/recipient'
  const illustImage = isProvider ? '/img/hcf_topokuru.png' : '/img/hcf_topuketoru.png'
  const topRightImage = isProvider ? '/img/hcf_okuruillust_1.png' : '/img/hcf_uketoruillust_1.png'
  const bottomLeftImage = isProvider
    ? '/img/hcf_okuruillust_2.png'
    : '/img/hcf_kyoutsuillust_green.png'
  const topRightAnime = isProvider ? 'animate-myspina' : 'animate-myspinc'
  const bottomLeftAnime = isProvider ? 'animate-myspinb' : 'animate-myspina'
  const isBackgroundFitLeft = isProvider

  return (
    <div className='relative'>
      <div
        className={cn(
          'flex flex-col-reverse items-center justify-center gap-sp-5 px-sp-5 py-sp-6 lg:gap-pc-5 lg:p-pc-6',
          bgPaleColor,
          isProvider ? 'lg:flex-row' : 'lg:flex-row-reverse',
          isBackgroundFitLeft
            ? '-ml-sp-6 -mr-sp-5 rounded-r-sp pl-sp-6 lg:-ml-pc-6 lg:rounded-r-pc'
            : '-ml-sp-5 -mr-sp-6 rounded-l-sp pr-sp-6 lg:-mr-pc-6 lg:rounded-l-pc',
        )}
      >
        <div className='flex w-full flex-col items-center space-y-sp-5 lg:items-start lg:space-y-pc-5'>
          <div className='w-full flex-1 lg:w-[65%]'>
            <FlagHeadline headlines={labelHeads} bgColor={bgColor} textColor='text-white' />
            <div className='relative flex flex-col items-center gap-x-[24px] lg:flex-row'>
              <Image
                src={labelImage1}
                alt=''
                width={804}
                height={120}
                className='aspect-[4/1] w-4/5 max-w-[300px] object-contain'
              />
              <Image
                src={labelImage2}
                alt=''
                width={546}
                height={120}
                className='aspect-[4/1] w-[58.6%] max-w-[220px] object-contain'
              />
            </div>
          </div>

          <div className='space-y-sp-1 text-sp-p lg:space-y-pc-1 lg:text-pc-p'>
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className='w-full lg:w-[35%]'>
          <div className='relative mx-auto aspect-[13/9] max-w-[300px]'>
            <Image src={illustImage} alt='' fill className='object-contain' />
          </div>
        </div>
      </div>
      <div className='absolute -bottom-sp-5 z-20 w-full lg:-bottom-pc-5'>
        <div className='flex justify-center'>
          <Button href={linkHref} texts={[linkText]} side={side} />
        </div>
      </div>
      <div className='absolute -right-5 -top-sp-5 z-10 aspect-square w-[60px] lg:-top-pc-5 lg:right-pc-5 lg:w-[80px]'>
        <Image src={topRightImage} fill alt='' className={topRightAnime} />
      </div>
      <div className='absolute -bottom-sp-5 -left-sp-5 z-10 aspect-square w-[60px] lg:-bottom-pc-5 lg:left-0 lg:w-[80px]'>
        <Image src={bottomLeftImage} fill alt='' className={bottomLeftAnime} />
      </div>
    </div>
  )
}
