'use client'
import NavigationTab from '@/components/projects/navigation-tab'
import ProjectCard from '@/components/projects/project-card'
import { ProjectsFilterContext } from '@/context/projects-filter'
import { useContext } from 'react'

export default function Projects() {
  const { projects } = useContext(ProjectsFilterContext)
  return (
    <div className="flex grow flex-col">
      <div className="border-b border-lines">
        <NavigationTab />
      </div>
      <div className=" flex max-h-[100vh] grow flex-col flex-wrap items-center justify-center gap-x-6 gap-y-8 overflow-auto p-8">
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
