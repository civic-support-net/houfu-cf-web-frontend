import Image from 'next/image'

import Button from '@/components/Button'
import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

export default function TopIntroduction() {
  return (
    <div className='space-y-sp-6 bg-white p-sp-6 md:space-y-pc-6 md:p-pc-6'>
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
      <div className='w-full lg:w-2/5'>
        <div className='relative mx-auto aspect-[8/5]'>
          <Image
            src='/img/hcf_topillust.png'
            alt='ハートを渡すイラスト'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='w-full space-y-[1em] lg:w-3/5'>
        <h2 className='text-center text-sp-h2 font-bold tracking-wider lg:text-left lg:text-pc-h2'>
          「がんばれ!」
          <br className='lg:hidden' />
          「ありがとう!」
          <br />
          防府コミュニティフリッジは
          <br />
          みんなのえがおが集まる場所。
        </h2>

        <div className='text-sp-p lg:text-pc-p'>
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
  // sideによって、色や画像を切り分ける
  const labelHeads =
    side === 'provider' ? ['食料品や日用品を', 'おくる'] : ['食料品や日用品を', 'うけとる']
  const labelImage1 = side === 'provider' ? '/img/hcf_giving.png' : '/img/hcf_taking.png'
  const labelImage2 = '/img/hcf_food.png'
  const textColor = side === 'provider' ? 'text-my-red' : 'text-my-green'
  const bgColor = side === 'provider' ? 'bg-my-red' : 'bg-my-green'
  const bgPaleColor = side === 'provider' ? 'bg-my-palered' : 'bg-my-palegreen'
  const borderColor = side === 'provider' ? 'border-my-red' : 'border-my-green'
  const linkText = side === 'provider' ? 'おくる方法を見る' : 'うけとる方法を見る'
  const linkHref = side === 'provider' ? '/#provider' : '/#recipient'
  const illustImage = side === 'provider' ? '/img/hcf_topokuru.png' : '/img/hcf_topuketoru.png'
  const topRightImage =
    side === 'provider' ? '/img/hcf_okuruillust_1.png' : '/img/hcf_uketoruillust_1.png'
  const bottomLeftImage =
    side === 'provider' ? '/img/hcf_okuruillust_2.png' : '/img/hcf_kyoutsuillust_green.png'
  const isBackgroundFitLeft = side === 'provider'

  return (
    <div className='relative'>
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-sp-5 p-sp-6 lg:flex-row-reverse lg:gap-pc-5 lg:p-pc-6',
          bgPaleColor,
          isBackgroundFitLeft
            ? '-ml-[44px] -mr-[28px] rounded-r-sp pl-[44px] lg:-ml-pc-6 lg:rounded-r-pc'
            : '-ml-[28px] -mr-[44px] rounded-l-sp pr-[44px] lg:-mr-pc-6 lg:rounded-l-pc',
        )}
      >
        <div className='w-full lg:w-2/5'>
          <div className='relative mx-auto aspect-[13/9]'>
            <Image src={illustImage} alt='' fill className='object-contain' />
          </div>
        </div>

        <div className='flex w-full flex-col items-center space-y-[32px] lg:w-3/5 lg:items-start lg:space-y-pc-5'>
          <div className='space-y-sp-3 lg:space-y-pc-3'>
            <FlagHeadline headlines={labelHeads} bgColor={bgColor} textColor='text-white' />
            <div className='relative flex flex-col items-center gap-x-[24px] lg:flex-row'>
              <Image
                src={labelImage1}
                alt=''
                width={804}
                height={120}
                className='aspect-[4/1] max-w-[85%] object-contain lg:max-w-[50%]'
              />
              <Image
                src={labelImage2}
                alt=''
                width={546}
                height={120}
                className='aspect-[4/1] max-w-[65%] object-contain lg:max-w-[38%]'
              />
            </div>
          </div>

          <div className='text-sp-p lg:text-pc-p'>
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-24px] z-20 w-full lg:bottom-[-42px]'>
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
      <div className='absolute right-0 top-[-22px] z-10 aspect-[10/9] w-[60px] lg:right-[42px] lg:top-[-42px] lg:w-[80px]'>
        <Image src={topRightImage} fill alt='' className='' />
      </div>
      <div className='absolute bottom-[-22px] left-0 z-10 aspect-[10/9] w-[60px] lg:bottom-[-42px] lg:left-[42px] lg:w-[80px]'>
        <Image src={bottomLeftImage} fill alt='' className='' />
      </div>
    </div>
  )
}
