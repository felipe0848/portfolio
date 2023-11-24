import Image from 'next/image'

interface ProjectCardProps {
  project: {
    title: string
    subtitle: string
    imageUrl: string
    description: string
    githubUrl: string
    deployUrl: string
  }
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <header className="flex gap-2 mb-2">
        <strong className="text-secondary-purple">{project.title}</strong>
        <p>{`// _${project.subtitle}`}</p>
      </header>
      <div className="w-[370px] h-[315px] rounded-lg overflow-hidden border-2 border-lines flex flex-col hover:brightness-110">
        <div className="w-full min-h-36 overflow-hidden">
          <Image alt="" src={project.imageUrl} width={386} height={145} />
        </div>
        <div className="w-full h-full px-7 py-5 flex flex-col justify-between bg-primary-dark-blue ">
          <p className="">{project.description}</p>
          <div className="flex justify-between">
            <a
              href={project.githubUrl}
              className="p-3 text-gray-300 bg-secondary-gray rounded-md"
            >
              view-code
            </a>
            <a
              href={project.deployUrl}
              className="p-3 text-gray-300 bg-secondary-gray rounded-md"
            >
              view-project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
