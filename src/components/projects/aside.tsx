'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { projectsTags } from '@/db/projects'
import FilterItem from './filterItem'

export default function Aside() {
  return (
    <aside className="border-r border-lines min-w-[300px]">
      <Collapsible.Root>
        <Collapsible.Trigger asChild>
          <span className="[&>i]:data-[state=open]:rotate-90 flex items-center gap-2 border-b px-4 py-2 border-lines text-gray-300 cursor-pointer">
            <i className="ri-arrow-right-s-fill ri-xl" />
            <p>projects</p>
          </span>
        </Collapsible.Trigger>
        <Collapsible.Content className="flex flex-col px-4 py-3 gap-4">
          <FilterItem name="Todos os Projetos" />

          {projectsTags.map(({ name, icon }) => (
            <FilterItem name={name} icon={icon} key={name} />
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </aside>
  )
}
