import Aside from '@/components/projects/aside'
import { ReactNode } from 'react'

interface LayoutProjectsProps {
  children: ReactNode
}
export default function LayoutProjects({ children }: LayoutProjectsProps) {
  return (
    <div className="flex grow flex-col overflow-auto md:flex-row">
      <Aside />
      {children}
    </div>
  )
}
