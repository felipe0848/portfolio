import ProjectCard from '@/components/projects/project-card'

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
        <span className="flex relative pl-3 py-2 gap-1 pr-16 border-r border-lines w-fit">
          <p>React;</p>
          <p>Vue;</p>
          <button className="absolute top-2 right-3">
            <i className="ri-close-fill" />
          </button>
        </span>
      </div>
      <div className="flex grow items-center justify-center gap-x-6 gap-y-8 flex-wrap p-8">
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
        <ProjectCard project={projectFake} />
      </div>
    </div>
  )
}
