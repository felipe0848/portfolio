'use client'

import { ProjectsFilterContext } from '@/context/projects-filter'
import { useContext } from 'react'

export default function NavigationTab() {
  const { filter, changeFilter } = useContext(ProjectsFilterContext)
  if (filter.length > 0)
    return (
      <span className="relative flex w-fit gap-1 border-r border-lines py-2 pl-3 pr-16">
        {filter.includes('Todos os Projetos') ? (
          <p>Todos os Projetos;</p>
        ) : (
          filter.map((filter) => <p key={filter}>{filter};</p>)
        )}
        <button
          className="absolute right-3 top-2 hover:font-semibold"
          onClick={() => {
            changeFilter('Todos os Projetos', false)
          }}
        >
          <i className="ri-close-fill" />
        </button>
      </span>
    )
}
