'use client'
import NavigationTab from '@/components/projects/navigation-tab'
import ProjectCard from '@/components/projects/project-card'
import { ProjectsFilterContext } from '@/context/projects-filter'
import { useContext } from 'react'

export default function Projects() {
  const { projects } = useContext(ProjectsFilterContext)
  return (
    <div className="flex grow flex-col">
      <div className="border-y border-lines md:border-t-0">
        <NavigationTab />
      </div>
      <div className="flex max-h-[80vh] grow flex-col flex-wrap items-center justify-start gap-x-6 gap-y-8 overflow-y-auto overflow-x-hidden p-8 max-[445px]:flex-nowrap md:max-h-[100vh] md:overflow-auto">
        {projects.length > 0
          ? projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))
          : // fazer imagem de vazio
            ''}
      </div>
    </div>
  )
}
