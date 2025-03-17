import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

const notes = [
  {
    headlines: ['みなさまからの', 'メッセージについて'],
    listItems: [
      'みなさまからのメッセージは、特定非営利活動法人市民活動さぽーとねっとがチェックをし、投稿して公開されます。',
    ],
  },
  {
    headlines: ['著作権について'],
    listItems: [
      'サイト上のコンテンツ（テキスト、画像など）は著作権で保護されており、無断で複製、再配布、または転載することは禁止されています。',
      'コンテンツを使用したい場合は必ず事前にご連絡いただき、当法人の許可を得てください。',
    ],
  },
  {
    headlines: ['免責事項'],
    listItems: [
      '予告無しに内容やアドレスを変更または削除する場合がありますので、あらかじめご了承ください。',
      '当サイトの利用は、利用者ご自身の責任において行われるものとします。当サイト上の掲載情報については、慎重に作成、管理しますが、すべての情報の正確性および完全性を保証するものではありません。あらかじめ、ご了承ください。',
      '当サイトから入手された情報により発生した問題・障害に対して、当サイトの開発・運営者はいかなる責任も負いません。',
    ],
  },
]

function SquareBulletList({ items, bgColor }: { items: string[]; bgColor: string }) {
  return (
    <ul className='space-y-sp-3 lg:space-y-pc-3'>
      {items.map((item, index) => (
        <li key={index} className='flex'>
          <span className={cn('m-2 inline-block size-4 shrink-0 rounded-full', bgColor)} />
          <p className='text-sp-p lg:text-pc-p'>{item}</p>
        </li>
      ))}
    </ul>
  )
}

export default function AboutNotes() {
  return (
    <div className=' space-y-sp-6 bg-white p-sp-6 lg:space-y-pc-6 lg:p-pc-6'>
      {notes.map((note, index) => (
        <div key={index} className=''>
          <FlagHeadline headlines={note.headlines} bgColor='bg-my-yellow' textColor='text-black' />
          <SquareBulletList items={note.listItems} bgColor='bg-my-yellow' />
        </div>
      ))}
    </div>
  )
}
