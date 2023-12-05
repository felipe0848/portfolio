/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import DefaultProviders from '@/components/default-providers'

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
        <DefaultProviders>
          <main className="m-5 mx-auto flex h-[calc(100vh-2.5rem)] max-h-[1080px] w-[calc(100vw-2.5rem)] max-w-[1440px] flex-col rounded-lg border border-lines bg-primary-blue">
            <Header />
            {children}
            <Footer />
          </main>
        </DefaultProviders>
        <Analytics />
      </body>
    </html>
  )
}
