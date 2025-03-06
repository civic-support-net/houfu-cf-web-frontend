import FlagHeadline from '@/components/FlagHeadline'
import Image from 'next/image'

const organizations = [
  {
    organizationURL: '/img/group-tokuyama-kosen.png',
    organizationText:
      '情報電子工学科の学生有志2名が、LINEの機能を活用した(記事)投稿システム・OCR技術を活用し、Webサイト開発に挑戦。',
  },
  {
    organizationURL: '/img/hcf_supportnet_logo.png',
    organizationText:
      '防府コミュニティフリッジに参加している方々のキモチをより多くの方へお届けし、「困ったときはおたがいさま」のキモチを支え合える仕組みを目指す。',
  },
  {
    organizationURL: '/img/hcf_digitech.png',
    organizationText:
      '徳山高専の学生や特定非営利活動法人市民活動さぽーとねっとなど「デジテック for YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進。',
  },
]

export default function AboutOrganizations() {
  return (
    <div className='flex flex-col justify-start items-center bg-white gap-y-sp5 lg:gap-y-pc-5 p-6 lg:p-12'>
      <div className='space-y-6 text-left'>
        <FlagHeadline
          headlines={['このサイトに', '関わっている団体']}
          bgColor='bg-my-yellow'
          textColor='text-black'
        />
        <p className='text-sp-p lg:text-pc-p'>
        当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ「デジテック for YAMAGUCHI」の共創プロジェクトにより作成されました。 徳山高専の学生が中心となって開発を行いました。
        </p>
      </div>

      <div className='flex flex-col mx-auto  justify-center items-center gap-y-sp-5 lg:flex-row lg:gap-x-pc-5'>
      {organizations.map(({organizationURL,organizationText}, index) => (
        <div className='flex flex-1 flex-col space-y-[1em] items-center text-center' key={index}>
          <div className='relative w-64 h-64 justify-center items-center'>
          <Image src={organizationURL} alt='' layout='fill' objectFit='contain'/>
          </div>
          <p className='text-sp-p2 lg:text-pc-p2'>{organizationText}</p>
        </div>
          
      ))}
      </div>

      <div className='flex items-center justify-center p-2'>
        <div className='w-full rounded-sp border-2 border-black  lg:rounded-pc'>
          <p>OSSの案内</p>
        </div>
      </div>
    </div>
  )
}
