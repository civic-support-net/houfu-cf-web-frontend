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
        <Section>
          <TopIntroduction />
        </Section>
        <Section>
          <TopPlace />
        </Section>
      </div>
    </div>
  )
}

export default HomePage
