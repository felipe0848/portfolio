/* eslint-disable prettier/prettier */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Aside() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <aside className="flex flex-col gap-8 p-4">
      <Link
        href="/about/pro"
        className={`${pathname === '/about/pro' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300`}
        title="Informações profissionais"
      >
        <i className="ri-terminal-box-fill ri-xl" />
      </Link>
      <Link
        href="/about/me"
        className={`${pathname === '/about/me' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300`}
        title="Informações pessoais"
      >
        <i className="ri-user-3-fill ri-xl" />
      </Link>
      <Link
        href="/about/hobbies"
        className={`${pathname === '/about/hobbies' ? 'opacity-100' : 'opacity-40'
          } px-2 hover:text-gray-300`}
        title="Hobbies"
      >
        <i className="ri-gamepad-fill ri-xl" />
      </Link>
    </aside>
  )
}
