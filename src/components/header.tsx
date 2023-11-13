/* eslint-disable prettier/prettier */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const activeStyle =
    'border-b-accent-orange text-white border-b-2 cursor-default'
  const inactiveStyle =
    'border-b hover:text-white hover:border-b-accent-orange hover:border-b-2'
  return (
    <header className="flex w-full text-secondary-blue sm:justify-between">
      <Link href="/" className="px-6 py-4 border-b  w-full min-w-[13rem] border-lines sm:w-52">
        felipe-soares
      </Link>
      <button className='px-6 py-4 border-b border-lines sm:hidden'>
        <i className="ri-menu-line ri-xl" />
      </button>

      <nav className="hidden justify-between w-full sm:flex">
        <div className="flex">
          <Link
            href="/"
            className={`${pathname === '/' ? activeStyle : inactiveStyle
              } py-4 flex px-8 border-l border-lines`}
          >
            _hello
          </Link>
          <Link
            href="/about_me"
            className={`${pathname === '/about_me' ? activeStyle : inactiveStyle
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

    </header>
  )
}
