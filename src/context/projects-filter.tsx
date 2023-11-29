'use client'
import { projects, projectsTags } from '@/db/projects'
import { StaticImageData } from 'next/image'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface project {
  title: string
  subtitle: string
  imageUrl: StaticImageData | string
  description: string
  githubUrl: string
  deployUrl: string
  tags: string[]
}
interface ProjectsFilterContextType {
  filter: string[]
  changeFilter: (filterName: string, checked: boolean) => void
  projects: project[]
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
  const alltags = projectsTags.map((tag) => tag.name)
  const [filter, setFilter] = useState<string[]>([
    'Todos os Projetos',
    ...alltags,
  ])
  const [filteredProjects, setFilteredProjects] = useState<project[]>([])

  useEffect(() => {
    filterProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  function changeFilter(filterName: string, checked: boolean) {
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
  function filterProjects() {
    const newFilteredProjects = projects.filter((project) =>
      project.tags.some((tag) => filter.includes(tag)),
    )
    setFilteredProjects(newFilteredProjects)
  }
  return (
    <ProjectsFilterContext.Provider
      value={{ filter, changeFilter, projects: filteredProjects }}
    >
      {children}
    </ProjectsFilterContext.Provider>
  )
}
