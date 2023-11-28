'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Checkbox from '@radix-ui/react-checkbox'
import { projectsTags } from '@/db/projects'
import Image from 'next/image'

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
          {projectsTags.map(({ name, icon }) => (
            <span key={name} className="flex items-center gap-5">
              <Checkbox.Root
                className="border-2 border-secondary-blue w-6 h-6 rounded flex justify-center items-center data-[state=checked]:bg-secondary-blue hover:outline outline-lines/90"
                id={name}
              >
                <Checkbox.Indicator>
                  <i className="ri-check-fill text-gray-300" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor={name}
                className="flex items-center gap-2 cursor-pointer text-secondary-blue"
              >
                <Image
                  alt=""
                  height="24"
                  width="24"
                  src={`https://cdn.simpleicons.org/${icon}/607B96`}
                />
                <p>{name}</p>
              </label>
            </span>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </aside>
  )
}
