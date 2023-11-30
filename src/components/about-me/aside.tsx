'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-row justify-center gap-8 border-b border-lines p-4 phone-xl:flex-col phone-xl:justify-normal phone-xl:border-b-0 phone-xl:border-r md:border-none">
      <Link
        href="/about/pro"
        className={`${
          pathname === '/about/pro' ? 'opacity-100' : 'opacity-40'
        } flex items-center gap-1 px-2 hover:text-gray-300`}
        title="Informações profissionais"
      >
        <i className="ri-terminal-box-fill ri-xl" />
        <p className="phone-xl:hidden">/pro</p>
      </Link>
      <Link
        href="/about/me"
        className={`${
          pathname === '/about/me' ? 'opacity-100' : 'opacity-40'
        } flex items-center gap-1 px-2 hover:text-gray-300`}
        title="Informações pessoais"
      >
        <i className="ri-user-3-fill ri-xl" />
        <p className="phone-xl:hidden">/me</p>
      </Link>
    </aside>
  )
}
