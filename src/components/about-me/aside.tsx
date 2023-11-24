/* eslint-disable prettier/prettier */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-row justify-center phone-xl:justify-normal phone-xl:flex-col gap-8 p-4 border-b phone-xl:border-b-0 phone-xl:border-r border-lines md:border-none">
      <Link
        href="/about/pro"
        className={`${pathname === '/about/pro' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300 flex items-center gap-1`}
        title="Informações profissionais"
      >
        <i className="ri-terminal-box-fill ri-xl" />
        <p className='phone-xl:hidden'>/pro</p>
      </Link>
      <Link
        href="/about/me"
        className={`${pathname === '/about/me' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300 flex items-center gap-1`}
        title="Informações pessoais"
      >
        <i className="ri-user-3-fill ri-xl" />
        <p className='phone-xl:hidden'>/me</p>
      </Link>
      <Link
        href="/about/hobbies"
        className={`${pathname === '/about/hobbies' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300 flex items-center gap-1`}
        title="Hobbies"
      >
        <i className="ri-gamepad-fill ri-xl" />
        <p className='phone-xl:hidden'>/hobbies</p>
      </Link>
    </aside>
  )
}
