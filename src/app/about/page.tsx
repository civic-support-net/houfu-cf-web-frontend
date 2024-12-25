import AboutNotes from '@/components/AboutNotes'
import AboutOrganizations from '@/components/AboutOrganizations'
import AboutOwner from '@/components/AboutOwner'
import Headline from '@/components/Headline'
import Section from '@/components/Section'

const AboutPage = () => {
  return (
    <>
      <>
        <Headline
          headline='このサイトについて'
          headlineColor='ついて'
          color='text-my-dark'
          bgImage='bg-heroillust3'
        />
        <Section>
          <AboutOwner />
        </Section>
        <Section>
          <AboutOrganizations />
        </Section>
        <Section>
          <AboutNotes />
        </Section>
      </>
    </>
  )
}

export default AboutPage
