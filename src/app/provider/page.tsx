import Headline from '@/components/Headline'
import ProviderFlow from '@/components/ProviderFlow'
import ProviderWays from '@/components/ProviderWays'
import Section from '@/components/Section'

const ProviderPage = () => {
  return (
    <>
      <Headline
        headline='食料品や日用品を'
        headlineTail='おくる'
        tailColor='text-my-red'
        image='/img/hcf_heroillust_2.png'
      />
      <div className='relative mx-auto max-w-[1200px]'>
        <Section>
          <ProviderFlow />
        </Section>
        <Section>
          <ProviderWays />
        </Section>
      </div>
    </>
  )
}

export default ProviderPage
