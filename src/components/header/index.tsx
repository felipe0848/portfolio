'use client'
import { useMediaQuery } from 'react-responsive'
import Navbar from './navbar'
import NavbarMobile from './navbar-mobile'

export default function Header() {
  const screenSm = useMediaQuery({ query: '(max-width: 640px)' })
  return (
    <header className="flex w-full text-secondary-blue sm:justify-between">
      <p className="w-full min-w-[13rem] border-b  border-lines px-6 py-4 sm:w-52">
        felipe-soares
      </p>
      {screenSm ? <NavbarMobile /> : <Navbar />}
    </header>
  )
}
