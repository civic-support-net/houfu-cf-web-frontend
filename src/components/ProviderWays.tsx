import Image from 'next/image'

import Button from '@/components/Button'
import FlagHeadline from '@/components/FlagHeadline'
import MegaphoneHeadline from '@/components/MegaphoneHeadline'

export default function ProviderWays() {
  return (
    <div className='space-y-sp-6 bg-my-palered px-sp-3 py-sp-6 text-sp-p lg:space-y-pc-6 lg:p-pc-6 lg:text-pc-p'>
      <div className='px-sp-5 lg:p-0'>
        <FlagHeadline
          headlines={['キモチの', 'おくりかたは', 'さまざまです']}
          bgColor='bg-my-red'
          textColor='text-white'
        />
        <p>フードプレゼンター以外の方法で、キモチをおくることもできます。</p>
        <p>
          例えば、現地へのお持ち込みではなく、インターネットを通じて品物をおくることができたり、ボランティアとしてコミュニティフリッジの運営のお手伝いをしていただいたり、それぞれのライフスタイルに合った方法で「おたがいさま」のキモチをおくっていただいています。
        </p>
      </div>

      <div className='relative z-10 mx-auto max-w-screen-md space-y-sp-5 lg:space-y-pc-5'>
        <Internet />
        <Donate />
        <Volunteer />
      </div>
    </div>
  )
}

const Internet = () => {
  return (
    <div className='relative'>
      <div className='space-y-sp-5 rounded-sp bg-white p-8 md:p-pc-6 lg:space-y-pc-5 lg:rounded-pc'>
        <MegaphoneHeadline side='provider' headlines={['インターネットから', '品物をおくる']} />
        <p>
          インターネット上でお買い物した商品をおくる「スマートサプライ」も受け付けています。Amazonの欲しいものリストに登録されている品物を購入していただくと、コミュニティフリッジへおくることができます。
        </p>
        <p>※Amazonアカウントが必要です。</p>
        <div className='flex justify-center'>
          <Button
            texts={['スマートサプライ']}
            href='https://hofu.communityfridge.jp/personal-form/?fbclid=IwAR0BV0L4h1tvkVPkdDtuqYRxeUaww-m2DEc6DrYVvrac_RkAZV57HxN4Prc'
            side='provider'
            isExternal={true}
          />
        </div>
      </div>
      <div className='absolute -top-sp-5 right-sp-5 z-10 aspect-[225/240] w-[50px] lg:-top-pc-5 lg:right-pc-6 lg:w-[80px]'>
        <Image src='/img/hcf_internetsupply.png' fill alt='' />
      </div>
    </div>
  )
}

const Donate = () => {
  return (
    <div className='relative'>
      <div className='space-y-sp-5 rounded-sp bg-white p-8 lg:rounded-pc lg:p-pc-6'>
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
            <span>1年に1回のご寄付で応援してください!</span>
          </div>
        </div>
        <div className='flex justify-center'>
          <Button
            texts={['寄付する']}
            href='https://congrant.com/credit/form?project_id=3204'
            side='provider'
            isExternal={true}
          />
        </div>
        <div className='border-t-2 border-dashed border-my-red' />
        <div className='flex flex-col space-y-sp-3 lg:flex-row lg:space-y-0'>
          <div className='flex-1'>
            <div className='mr-2 mt-1 inline-block size-4 shrink-0 bg-my-red' />
            <span>銀行振込で寄付</span>
          </div>
          <div className='flex flex-1 flex-col'>
            <span>もみじ銀行 防府支店</span>
            <span>普通　1542374</span>
            <span>トクヒ）シミンカツドウサポートネット</span>
          </div>
        </div>
      </div>
      <div className='absolute -top-sp-5 left-sp-5 z-10 aspect-square w-[60px] lg:-top-pc-5 lg:left-pc-6 lg:w-[80px]'>
        <Image src='/img/hcf_okuruillust_1.png' fill alt='' />
      </div>
    </div>
  )
}

const Volunteer = () => {
  return (
    <div className='relative'>
      <div className='space-y-sp-5 rounded-sp bg-white p-8 md:p-pc-6 lg:space-y-pc-5 lg:rounded-pc'>
        <MegaphoneHeadline side='provider' headlines={['ボランティアとして', 'キモチをおくる']} />
        <p>
          受け入れた品物の整理等の作業や広報など、食品や日用品、寄付金をおくるのではなくボランティアとしてご協力してくださる方も募集しています。
        </p>
      </div>
      <div className='absolute -bottom-sp-5 right-sp-5 z-10 aspect-square w-[60px] lg:-right-pc-5 lg:bottom-pc-5 lg:-z-10 lg:w-[80px] lg:rotate-45'>
        <Image src='/img/hcf_kyoutsuillust_red.png' fill alt='' />
      </div>
    </div>
  )
}
