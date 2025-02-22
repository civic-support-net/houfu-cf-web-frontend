import Headline from '@/components/Headline'
import RecipientCasually from '@/components/RecipientCasually'
import RecipientFlow from '@/components/RecipientFlow'
import Section from '@/components/Section'

const RecipientPage = () => {
  return (
    <>
      <Headline
        headline='食料品や日用品を'
        headlineTail='うけとる'
        tailColor='text-my-green'
        bgImage='bg-heroillust1'
      />
      <div className='relative z-10 mx-auto max-w-[1200px]'>
        <Section>
          <RecipientFlow />
        </Section>
        <Section>
          <RecipientCasually />
        </Section>
      </div>
    </>
  )
}

export default RecipientPage
