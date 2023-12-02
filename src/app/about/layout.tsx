import Aside from '@/components/about-me/aside'

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex grow flex-col overflow-auto md:flex-row">
      <Aside />
      {children}
    </div>
  )
}
