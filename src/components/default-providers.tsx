'use client'
import CodeViewProvider from '@/context/code-view'
import { ProjectsFilterProvider } from '@/context/projects-filter'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface DefaultProvidersProps {
  children: ReactNode
}
export default function DefaultProviders({ children }: DefaultProvidersProps) {
  return (
    <ProjectsFilterProvider>
      <CodeViewProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CodeViewProvider>
    </ProjectsFilterProvider>
  )
}
