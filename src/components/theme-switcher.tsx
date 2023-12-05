'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      {theme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          title="Alterar tema para escuro"
        >
          <i className="ri-moon-line ri-xl" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          title="Alterar tema para claro"
        >
          <i className="ri-sun-line ri-xl" />
        </button>
      )}
    </div>
  )
}
