'use client'
/* eslint-disable prettier/prettier */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const activeStyle =
    'border-b-accent-orange text-white border-b-2 cursor-default'
  const inactiveStyle =
    'border-b hover:text-white hover:border-b-accent-orange hover:border-b-2'

  return (
    <nav className="justify-between w-full flex">
      <div className="flex">
        <Link
          href="/"
          className={`${pathname === '/' ? activeStyle : inactiveStyle
            } py-4 flex px-8 border-l border-lines`}
        >
          _hello
        </Link>
        <Link
          href="/about/me"
          className={`${pathname.startsWith('/about') ? activeStyle : inactiveStyle
            } py-4 flex px-8 border-l border-lines`}
        >
          _about-me
        </Link>
        <Link
          href="/projects"
          className={`${pathname === '/projects' ? activeStyle : inactiveStyle
            } py-4 flex px-8 border-x border-lines`}
        >
          _projects
        </Link>
      </div>

      <div className="flex-1 border-b border-lines"></div>
      <Link
        href="/contact"
        className={`${pathname === '/contact' ? activeStyle : inactiveStyle
          } py-4 flex px-6 border-l border-lines`}
      >
        _contact-me
      </Link>
    </nav>
  )
}
