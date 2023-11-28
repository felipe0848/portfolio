import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
  project: {
    title: string
    subtitle: string
    imageUrl: StaticImageData | string
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
        <div className="w-full min-h-[180px] px-7 py-5 flex flex-col justify-between bg-primary-dark-blue  gap-2">
          <p className="max-h-[75px] overflow-clip text-ellipsis line-clamp-3">
            {project.description}
          </p>
          <div className="flex justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              className="p-3 text-gray-300 bg-secondary-gray rounded-md"
              rel="noreferrer"
            >
              view-code
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              className="p-3 text-gray-300 bg-secondary-gray rounded-md"
              rel="noreferrer"
            >
              view-project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
