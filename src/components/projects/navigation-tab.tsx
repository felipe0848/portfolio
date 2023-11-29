'use client'

import { ProjectsFilterContext } from '@/context/projects-filter'
import { useContext } from 'react'

export default function NavigationTab() {
  const { filter } = useContext(ProjectsFilterContext)
  if (filter.length > 0)
    return (
      <span className="flex relative pl-3 py-2 gap-1 pr-16 border-r border-lines w-fit">
        {filter.includes('Todos os Projetos') ? (
          <p>Todos os Projetos;</p>
        ) : (
          filter.map((filter) => <p key={filter}>{filter};</p>)
        )}
        <button className="absolute top-2 right-3">
          <i className="ri-close-fill" />
        </button>
      </span>
    )
}
