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
      <header className="mb-2 flex gap-2">
        <strong className="text-secondary-purple">{project.title}</strong>
        <p>{`// _${project.subtitle}`}</p>
      </header>
      <div className="flex h-[315px] w-[370px] flex-col overflow-hidden rounded-lg border-2 border-lines hover:brightness-110">
        <div className="min-h-36 w-full overflow-hidden">
          <Image alt="" src={project.imageUrl} width={386} height={145} />
        </div>
        <div className="flex min-h-[180px] w-full flex-col justify-between gap-2 bg-primary-dark-blue px-7  py-5">
          <p className="line-clamp-3 max-h-[75px] overflow-clip text-ellipsis">
            {project.description}
          </p>
          <div className="flex justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              className="rounded-md bg-secondary-gray p-3 text-gray-300"
              rel="noreferrer"
            >
              view-code
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              className="rounded-md bg-secondary-gray p-3 text-gray-300"
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
