import Image from 'next/image'
import Link from 'next/link'

import FlagHeadline from '@/components/FlagHeadline'
import MegaphoneHeadline from '@/components/MegaphoneHeadline'

const organizations = [
  {
    url: '/img/hcf_tokuyamakousen.png',
    alt: '徳山高専',
    text: '情報電子工学科の学生有志2名が、LINEの機能を活用した(記事)投稿システム・OCR技術を活用し、Webサイト開発に挑戦。',
  },
  {
    url: '/img/hcf_supportnet.png',
    alt: '特定非営利活動法人市民活動さぽーとねっと',
    text: '防府コミュニティフリッジに参加している方々のキモチをより多くの方へお届けし、「困ったときはおたがいさま」のキモチを支え合える仕組みを目指す。',
  },
  {
    url: '/img/hcf_digitech.png',
    alt: 'デジテック for YAMAGUCHI',
    text: '徳山高専の学生や特定非営利活動法人市民活動さぽーとねっとなど「デジテック for YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進。',
  },
]

export default function AboutOrganizations() {
  return (
    <div className='flex flex-col justify-start gap-y-sp-6 bg-white p-sp-3 lg:gap-y-pc-6 lg:p-pc-6'>
      <div className='space-y-sp-6 p-sp-5 lg:space-y-pc-6 lg:p-0'>
        <div>
          <FlagHeadline
            headlines={['このサイトに', '関わっている団体']}
            bgColor='bg-my-yellow'
            textColor='text-black'
          />
          <p className='text-sp-p lg:text-pc-p'>
            当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ「デジテック for
            YAMAGUCHI」の共創プロジェクトにより作成されました。徳山高専の学生が中心となって開発を行いました。
          </p>
        </div>

        <div className='mx-auto flex flex-col  items-center justify-center gap-sp-5 lg:flex-row lg:gap-pc-5'>
          {organizations.map((org, index) => (
            <div className='flex flex-1 flex-col items-center space-y-[1em]' key={index}>
              <div className='relative aspect-[888/660] w-full max-w-[320px]'>
                <Image src={org.url} alt={org.alt} fill />
              </div>
              <p className='text-sp-p2 lg:text-pc-p2'>{org.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto w-full max-w-screen-md space-y-sp-3 rounded-sp bg-my-paleyellow p-sp-6 lg:space-y-pc-3 lg:rounded-pc lg:p-pc-6'>
        <MegaphoneHeadline side={'oss'} headlines={['OSSの案内']} />
        <p className='text-sp-p lg:text-pc-p'>
          当サイトのWebシステムは、プログラムをすべてGithubで公開しています。トップページの手書きイラストの旗は、付箋のメッセージを撮影したものをLINEから投稿してWebサイトに反映しています。是非ご活用ください。(システムの構築と運用は、技術者のサポートと少額の実費が必要です)
        </p>
        <Link href='https://github.com/civic-support-net' target='_blank' className='block'>
          <Image
            src='/img/github-QR.png'
            alt='GitHub'
            width={200}
            height={200}
            className='mx-auto rounded bg-white p-4'
          />
        </Link>
      </div>
    </div>
  )
}
