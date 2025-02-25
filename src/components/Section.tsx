export default function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className='my-sp-3 w-full lg:my-pc-5'>
      <div className='mx-auto overflow-hidden rounded-sp border-[3px] border-black lg:rounded-pc'>
        {children}
      </div>
    </div>
  )
}
