/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import '@/lib/highlight-custom.css'
import 'remixicon/fonts/remixicon.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
        <main className="m-5 bg-primary-blue h-[calc(100vh-2.5rem)] rounded-lg border-lines border flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
