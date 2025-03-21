import AboutNotes from '@/components/AboutNotes'
import AboutOrganizations from '@/components/AboutOrganizations'
import AboutOwner from '@/components/AboutOwner'
import Headline from '@/components/Headline'
import Section from '@/components/Section'

const AboutPage = () => {
  return (
    <>
      <Headline
        headline='このサイトに'
        headlineTail='ついて'
        tailColor='text-my-dark'
        image='/img/hcf_heroillust_3.png'
      />
      <div className='relative z-10 mx-auto max-w-[1200px]'>
        <Section>
          <AboutOwner />
        </Section>
        <Section>
          <AboutOrganizations />
        </Section>
        <Section>
          <AboutNotes />
        </Section>
      </div>
    </>
  )
}

export default AboutPage
