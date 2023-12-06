import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import ProjectsDetails, { Project } from './project-datails'
import Markdown from 'react-markdown'
interface ProjectCardProps {
  project: Project
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <header className="mb-2 flex gap-2">
        <strong className="text-secondary-purple">{project.title}</strong>
        <p>{`// _${project.subtitle}`}</p>
      </header>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="flex h-full max-h-[305px] w-full max-w-[370px] flex-col overflow-hidden rounded-lg border-2 border-slate-400 dark:border-lines">
            <div className="min-h-36 w-full overflow-hidden">
              <Image alt="" src={project.imageUrl} width={386} height={145} />
            </div>
            <div className="flex min-h-[180px] w-full flex-col justify-between gap-2 bg-slate-400/30 px-7 py-5  dark:bg-primary-dark-blue">
              <Markdown className="[&>h1]:mk-h3 [&>p]:mk-p line-clamp-4 max-h-[75px] overflow-clip text-ellipsis text-left md:line-clamp-3 [&>hr]:border-0">
                {project.description}
              </Markdown>
            </div>
          </div>
        </Dialog.Trigger>
        <div className="z-10 -mt-[4.5rem] flex justify-between px-7">
          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 rounded-md border-2 border-transparent bg-slate-500/60 p-3 text-gray-300 hover:border-secondary-purple hover:brightness-110 dark:bg-secondary-gray"
            rel="noreferrer"
          >
            <i className="ri-terminal-box-fill ri-lg dark:text-secondary-blue" />
            Code
          </a>
          <a
            href={project.deployUrl}
            target="_blank"
            className="flex items-center gap-2 rounded-md border-2 border-transparent bg-slate-500/60 p-3 text-gray-300 hover:border-secondary-purple hover:brightness-110 dark:bg-secondary-gray"
            rel="noreferrer"
          >
            <i className="ri-computer-fill ri-lg dark:text-secondary-blue" />
            Deploy
          </a>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="absolute inset-0 z-20 h-screen w-screen bg-slate-100/60 dark:bg-black/60" />
          <ProjectsDetails project={project} />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
