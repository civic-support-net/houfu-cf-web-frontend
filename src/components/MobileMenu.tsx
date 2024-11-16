export default function MobileMenu() {
  return (
    <div
      className='absolute inset-8 overflow-auto rounded-2xl border-4 border-black bg-white shadow-lg'
      onClick={(e) => e.stopPropagation()}
    >
      <nav className='p-4'>coding this area.</nav>
    </div>
  )
}
