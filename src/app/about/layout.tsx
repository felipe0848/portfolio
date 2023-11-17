import Aside from '@/components/about-me/aside'

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex grow">
      <Aside />
      {children}
    </div>
  )
}
