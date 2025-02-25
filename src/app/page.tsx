import Image from 'next/image'

import Section from '@/components/Section'
import TopHero from '@/components/TopHero'
import TopIntroduction from '@/components/TopIntroduction'
import TopPlace from '@/components/TopPlace'
import { GetApprovedMessages } from '@/data/messages'

const HomePage = async () => {
  const recipientMessages = await GetApprovedMessages('受給された方')
  const providerMessages = await GetApprovedMessages('提供された方')

  return (
    <div className='relative'>
      <div className='relative z-0'>
        <TopHero recipientMessages={recipientMessages} providerMessages={providerMessages} />
      </div>
      <div className='relative z-10 mx-auto max-w-[1200px]'>
        <div className='absolute left-1/2 right-sp-5 z-0 -translate-x-1/2 translate-y-[-45%] lg:right-pc-6 lg:translate-x-0'>
          <div className='flex justify-center space-x-2 lg:justify-end '>
            <Image
              src='/img/hcf_giftpeople.png'
              width={288}
              height={540}
              alt=''
              className='aspect-[288/540] w-[57.6px] lg:w-[108px]'
            />
            <Image
              src='/img/hcf_takepeople.png'
              width={216}
              height={540}
              alt=''
              className='aspect-[216/540] w-[40.5px] lg:w-[81px] '
            />
          </div>
        </div>
        <div className='relative z-10 mt-[50px] lg:mt-0'>
          <Section>
            <TopIntroduction />
          </Section>
          <Section>
            <TopPlace />
          </Section>
        </div>
        <div className='absolute -bottom-sp-3 left-sp-3 z-20 aspect-square w-[80px] lg:-bottom-pc-5 lg:left-pc-6 lg:w-[120px]'>
          <Image src='/img/hcf_heroillust_1.png' fill alt='' className='' />
        </div>
        <div className='absolute -bottom-sp-3 right-sp-3 z-20 aspect-square w-[80px] lg:-bottom-pc-5 lg:right-pc-6 lg:w-[120px]'>
          <Image src='/img/hcf_heroillust_2.png' fill alt='' className='' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
