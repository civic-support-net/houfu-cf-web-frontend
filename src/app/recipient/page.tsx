import Headline from '@/components/Headline'
import RecipientCasually from '@/components/RecipientCasually'
import RecipientFlow from '@/components/RecipientFlow'
import Section from '@/components/Section'

const RecipientPage = () => {
  return (
    <>
      <Headline
        headline='食料品や日用品を'
        headlineColor='うけとる'
        color='text-my-green'
        bgImage='bg-heroillust1'
      />
      <Section>
        <RecipientFlow />
      </Section>
      <Section>
        <RecipientCasually />
      </Section>
    </>
  )
}

export default RecipientPage
