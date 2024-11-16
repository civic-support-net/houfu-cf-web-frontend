export default function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className='my-8 w-full md:my-16'>
      <div className='mx-auto max-w-[1200px] overflow-hidden rounded-3xl border-[3px] border-black'>
        {children}
      </div>
    </div>
  )
}
