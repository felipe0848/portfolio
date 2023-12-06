import * as Dialog from '@radix-ui/react-dialog'
import Image, { StaticImageData } from 'next/image'
import Markdown from 'react-markdown'
export interface Project {
  title: string
  subtitle: string
  imageUrl: StaticImageData | string
  description: string
  githubUrl: string
  deployUrl: string
}
interface ProjectsDetails {
  project: Project
}
export default function ProjectsDetails({ project }: ProjectsDetails) {
  return (
    <Dialog.Content className="absolute inset-0 z-30 m-8 flex max-h-[1080px] max-w-[1440px] flex-col rounded-lg border border-lines bg-slate-300/90 dark:bg-primary-dark-blue phone-xl:m-16 min-[1500px]:mx-auto">
      <Dialog.Title className="border-b border-lines p-6 pb-4">
        {project.title}
      </Dialog.Title>
      <Dialog.Close className="absolute right-6 top-6 hover:font-semibold">
        <i className="ri-close-fill ri-xl" />
      </Dialog.Close>
      <Image
        alt=""
        src={project.imageUrl}
        fill
        className="-z-10 opacity-10 blur-sm dark:brightness-[.25]"
      />
      <Dialog.Description asChild>
        <div className="overflow-auto p-6 pt-4">
          <Markdown className="[&>h1]:mk-h1 [&>h2]:mk-h2 [&>h3]:mk-h3 [&>p]:mk-p [&>ul]:mk-ul [&>hr]:mk-hr">
            {project.description}
          </Markdown>
        </div>
      </Dialog.Description>
      <footer className="flex justify-center gap-8 p-6">
        <a
          href={project.githubUrl}
          target="_blank"
          className="flex items-center gap-2 rounded-md border-2 border-transparent bg-slate-500/80 p-3 text-gray-300 hover:border-secondary-purple hover:brightness-110 dark:bg-secondary-gray"
          rel="noreferrer"
        >
          <i className="ri-terminal-box-fill ri-lg dark:text-secondary-blue" />
          Code
        </a>
        <a
          href={project.deployUrl}
          target="_blank"
          className="flex items-center gap-2 rounded-md border-2 border-transparent bg-slate-500/80 p-3 text-gray-300 hover:border-secondary-purple hover:brightness-110 dark:bg-secondary-gray"
          rel="noreferrer"
        >
          <i className="ri-computer-fill ri-lg dark:text-secondary-blue" />
          Deploy
        </a>
      </footer>
    </Dialog.Content>
  )
}
