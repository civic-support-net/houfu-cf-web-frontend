export default function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className='my-8 w-full md:my-16'>
      <div className='mx-auto overflow-hidden rounded-sp border-[3px] border-black md:rounded-pc'>
        {children}
      </div>
    </div>
  )
}
