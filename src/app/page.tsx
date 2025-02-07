import Section from '@/components/Section'
import TopHero from '@/components/TopHero'
import TopIntroduction from '@/components/TopIntroduction'
import TopPlace from '@/components/TopPlace'
import { GetApprovedMessages } from '@/data/messages'

const HomePage = async () => {
  const recipientMessages = await GetApprovedMessages('受給された方')
  const providerMessages = await GetApprovedMessages('提供された方')

  return (
    <>
      <TopHero recipientMessages={recipientMessages} providerMessages={providerMessages} />
      <Section>
        <TopIntroduction />
      </Section>
      <Section>
        <TopPlace />
      </Section>
    </>
  )
}

export default HomePage
