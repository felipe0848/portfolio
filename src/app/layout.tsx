/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import CodeViewProvider from '@/context/code-view'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} bg-primary-black`}>
        <CodeViewProvider>
          <main className="m-5 bg-primary-blue min-h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)] rounded-lg border-lines border flex flex-col mx-auto max-w-[1400px]">
            <Header />
            {children}
            <Footer />
          </main>
        </CodeViewProvider>
      </body>
    </html>
  )
}
