'use client'
import { projectsTags } from '@/db/projects'
import { ReactNode, createContext, useState } from 'react'

interface ProjectsFilterContextType {
  filter: string[]
  changeFilter: (filterName: string, checked: boolean) => void
}

export const ProjectsFilterContext = createContext(
  {} as ProjectsFilterContextType,
)

interface ProjectsFilterProviderProps {
  children: ReactNode
}
export function ProjectsFilterProvider({
  children,
}: ProjectsFilterProviderProps) {
  const [filter, setFilter] = useState<string[]>([])
  const alltags = projectsTags.map((tag) => tag.name)

  function changeFilter(filterName: string, checked: boolean) {
    console.log({ filterName, checked })
    let newFilter = ['']

    if (filterName === 'Todos os Projetos') {
      checked
        ? (newFilter = ['Todos os Projetos', ...alltags])
        : (newFilter = [])
    } else {
      checked
        ? (newFilter = [...filter, filterName])
        : (newFilter = filter.filter((item) => item !== filterName))
    }

    alltags.every((item) => newFilter.includes(item))
      ? (newFilter = ['Todos os Projetos', ...alltags])
      : (newFilter = newFilter.filter((item) => item !== 'Todos os Projetos'))

    setFilter(newFilter)
  }
  return (
    <ProjectsFilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </ProjectsFilterContext.Provider>
  )
}
