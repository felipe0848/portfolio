'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      {theme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          title="Alterar tema para escuro"
          className="hover:font-semibold"
        >
          <i className="ri-moon-line ri-xl" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          title="Alterar tema para claro"
          className="hover:text-gray-300"
        >
          <i className="ri-sun-line ri-xl" />
        </button>
      )}
    </div>
  )
}
