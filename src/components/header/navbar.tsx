'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from '../theme-switcher'

export default function Navbar() {
  const pathname = usePathname()
  const activeStyle =
    'dark:border-b-accent-orange text-primary-blue dark:text-white border-b-4 dark:border-b-2 cursor-default'
  const inactiveStyle =
    'border-b dark:hover:text-white dark:hover:border-b-accent-orange dark:hover:border-b-2 hover:border-b-4 hover:text-primary-blue'

  return (
    <nav className="flex w-full justify-between">
      <div className="flex">
        <Link
          href="/"
          className={`${
            pathname === '/' ? activeStyle : inactiveStyle
          } flex border-l border-lines  px-8 py-4`}
        >
          _ola
        </Link>
        <Link
          href="/about"
          className={`${
            pathname.startsWith('/about') ? activeStyle : inactiveStyle
          } flex border-l border-lines px-8 py-4`}
        >
          _sobre-mim
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname === '/projects' ? activeStyle : inactiveStyle
          } flex border-x border-lines px-8 py-4`}
        >
          _projetos
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end border-b border-lines px-4">
        <ThemeSwitcher />
      </div>
      <Link
        href="/contact"
        className={`${
          pathname === '/contact' ? activeStyle : inactiveStyle
        } flex border-l border-lines px-6 py-4`}
      >
        _contate-me
      </Link>
    </nav>
  )
}
