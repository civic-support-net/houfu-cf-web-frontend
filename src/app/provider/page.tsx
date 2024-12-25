import Headline from '@/components/Headline'
import ProviderFlow from '@/components/ProviderFlow'
import ProviderWays from '@/components/ProviderWays'
import Section from '@/components/Section'

const ProviderPage = () => {
  return (
    <>
      <Headline
        headline='食料品や日用品を'
        headlineColor='おくる'
        color='text-my-red'
        bgImage='bg-heroillust2'
      />
      <Section>
        <ProviderFlow />
      </Section>
      <Section>
        <ProviderWays />
      </Section>
    </>
  )
}

export default ProviderPage
