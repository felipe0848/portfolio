'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const activeStyle =
    'border-b-accent-orange text-white border-b-2 cursor-default'
  const inactiveStyle =
    'border-b hover:text-white hover:border-b-accent-orange hover:border-b-2'

  return (
    <nav className="flex w-full justify-between">
      <div className="flex">
        <Link
          href="/"
          className={`${
            pathname === '/' ? activeStyle : inactiveStyle
          } flex border-l border-lines px-8 py-4`}
        >
          _hello
        </Link>
        <Link
          href="/about/me"
          className={`${
            pathname.startsWith('/about') ? activeStyle : inactiveStyle
          } flex border-l border-lines px-8 py-4`}
        >
          _about-me
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname === '/projects' ? activeStyle : inactiveStyle
          } flex border-x border-lines px-8 py-4`}
        >
          _projects
        </Link>
      </div>

      <div className="flex-1 border-b border-lines"></div>
      <Link
        href="/contact"
        className={`${
          pathname === '/contact' ? activeStyle : inactiveStyle
        } flex border-l border-lines px-6 py-4`}
      >
        _contact-me
      </Link>
    </nav>
  )
}
