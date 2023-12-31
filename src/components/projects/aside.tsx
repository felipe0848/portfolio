'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { projectsTags } from '@/db/projects'
import FilterItem from './filterItem'
import { useMediaQuery } from 'react-responsive'

export default function Aside() {
  const tablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <aside className="min-w-[300px] border-r border-lines">
      <Collapsible.Root defaultOpen={!tablet}>
        <Collapsible.Trigger asChild>
          <span className="flex cursor-pointer items-center gap-2 border-b border-lines px-4 py-2 dark:text-gray-300 [&>i]:data-[state=open]:rotate-90">
            <i className="ri-arrow-right-s-fill ri-xl" />
            <p>projects</p>
          </span>
        </Collapsible.Trigger>
        <Collapsible.Content className="flex flex-col gap-4 px-4 py-3">
          <FilterItem name="Todos os Projetos" />

          {projectsTags.map(({ name, icon }) => (
            <FilterItem name={name} icon={icon} key={name} />
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </aside>
  )
}
