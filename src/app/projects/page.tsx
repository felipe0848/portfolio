import NavigationTab from '@/components/projects/navigation-tab'
import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/db/projects'

const projectFake = {
  title: 'Coffe Delivery',
  subtitle: 'e-commerce-de-cafe',
  imageUrl: '/_next/static/media/Home.5f5ecfe8.png',
  description:
    '168 packages are looking for funding run `npm fund` for details',
  githubUrl: 'string',
  deployUrl: 'string',
}

export default function Projects() {
  return (
    <div className="flex flex-col grow">
      <div className="border-b border-lines">
        <NavigationTab />
      </div>
      <div className="flex flex-col max-h-[100vh] overflow-auto grow items-center justify-center gap-x-6 gap-y-8 flex-wrap p-8">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
      </div>
    </div>
  )
}
