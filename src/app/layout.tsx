/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import CodeViewProvider from '@/context/code-view'
import { ProjectsFilterProvider } from '@/context/projects-filter'
import { Analytics } from '@vercel/analytics/react'
const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Felipe Soares',
  description: 'FullStack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} bg-primary-black`}>
        <ProjectsFilterProvider>
          <CodeViewProvider>
            <main className="m-5 mx-auto flex min-h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)] max-w-[1400px] flex-col rounded-lg border border-lines bg-primary-blue">
              <Header />
              {children}
              <Footer />
            </main>
          </CodeViewProvider>
        </ProjectsFilterProvider>
        <Analytics />
      </body>
    </html>
  )
}
