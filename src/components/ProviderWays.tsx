import Link from 'next/link'

import FlagHeadline from '@/components/FlagHeadline'
import MegaphoneHeadline from '@/components/MegaphoneHeadline'

type RoundedRectangleProps = {
  texts: string
  link: string
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ texts, link }) => {
  return (
    <Link
      href={link}
      className='rounded-full border-2 border-my-red bg-white px-sp-3 py-sp-1 text-my-red lg:px-[32px] lg:py-pc-3'
    >
      <div className='flex flex-col items-center text-sp-p tracking-wider lg:flex-row lg:text-pc-h4'>
        <span>{texts}</span>
      </div>
    </Link>
  )
}

const Internet = () => {
  return (
    <div className='space-y-4 rounded-sp bg-white p-8 md:p-pc-6 lg:rounded-pc'>
      <MegaphoneHeadline side='provider' headlines={['インターネットから', '品物をおくる']} />
      <p>
        インターネット上でお買い物した商品をおくる「スマートサプライ」も受け付けています。Amazonの欲しいものリストに登録されている品物を購入していただくと、コミュニティフリッジへおくることができます。
      </p>
      <p>※スマートサプライというサービスを利用します。</p>
      <p>※Amazonアカウントが必要です。</p>
      <div className='flex size-full justify-center'>
        <RoundedRectangle texts='スマートサプライ' link='#' />
      </div>
    </div>
  )
}

const Donate = () => {
  return (
    <div className='space-y-4 rounded-sp bg-white p-8 lg:rounded-pc lg:p-pc-6'>
      <MegaphoneHeadline side='provider' headlines={['寄付金をおくる']} />
      <p>
        コミュニティフリッジは、できるだけ費用をおさえての運営を目指していますが、設備費・システム費などの維持費はかかっており、みなさまからの寄付によって支えられています。
      </p>
      <div className='flex flex-col space-y-sp-3 lg:flex-row lg:space-y-0'>
        <div className='flex-1'>
          <div className='mr-2 mt-1 inline-block size-4 shrink-0 bg-my-red' />
          <span>クレジットカードで寄付</span>
        </div>
        <div className='flex flex-1 flex-col'>
          <span>※congrantというサービスを利用します。</span>
        </div>
      </div>
      <div className='flex size-full justify-center'>
        <RoundedRectangle texts='寄付をする' link='' />
      </div>
      <div className='border-t-2 border-dashed border-my-red' />
      <div className='flex flex-col space-y-sp-3 lg:flex-row lg:space-y-0'>
        <div className='flex-1'>
          <div className='mr-2 mt-1 inline-block size-4 shrink-0 bg-my-red' />
          <span>銀行振込で寄付</span>
        </div>
        <div className='flex flex-1 flex-col'>
          <span>もみじ銀行 防府市店</span>
          <span>普通　1542374</span>
          <span>トクヒ）シミンカツドウサポートネット</span>
        </div>
      </div>
    </div>
  )
}

const Volunteer = () => {
  return (
    <div className='space-y-4 rounded-sp bg-white p-8 md:p-pc-6 lg:rounded-pc'>
      <MegaphoneHeadline side='provider' headlines={['ボランティアとして', 'キモチをおくる']} />
      <p>
        フードポストの回収・受け入れた品物の整理等の作業や広報など、食品や日用品、寄付金をおくるのではなくボランティアとしてご協力してくださる方も募集しています。
      </p>
    </div>
  )
}

export default function ProviderWays() {
  return (
    <div className='space-y-sp-6 bg-my-palered p-sp-6 text-sp-p lg:space-y-pc-6 lg:p-pc-6 lg:text-pc-p'>
      <div className=''>
        <FlagHeadline
          headlines={['キモチの', 'おくりかたは', 'さまざまです']}
          bgColor='bg-my-red'
          textColor='text-white'
        />
        <p>フードプレゼンター以外の方法で、キモチをおくることもできます。</p>
        <p>
          例えば、現地へのお持ち込みではなく、インターネットを通じて品物をおくることができたり、ボラインティアとしてコミュニティフリッジの運営のお手伝いをしていただいたり、それぞれのライフスタイルに合った方法で「おたがいさま」のキモチをおくっていただいています。
        </p>
      </div>

      <div className='relative z-10 mx-auto max-w-screen-lg space-y-sp-3'>
        <Internet />
        <Donate />
        <Volunteer />
      </div>
    </div>
  )
}
