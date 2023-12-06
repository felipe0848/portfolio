'use client'
import { ProjectsFilterContext } from '@/context/projects-filter'
import * as Checkbox from '@radix-ui/react-checkbox'
import Image from 'next/image'
import { useContext } from 'react'

interface FilterItemProps {
  name: string
  icon?: string
}
export default function FilterItem({ name, icon }: FilterItemProps) {
  const { filter, changeFilter } = useContext(ProjectsFilterContext)

  function handleChangeChecked(check: boolean) {
    changeFilter(name, check)
  }
  return (
    <span className="flex items-center gap-5">
      <Checkbox.Root
        className="peer flex h-6 w-6 items-center justify-center rounded border-2 border-secondary-blue outline-slate-400/40 hover:outline data-[state=checked]:bg-indigo-400 dark:outline-lines/90 dark:data-[state=checked]:bg-secondary-blue"
        id={name}
        onCheckedChange={handleChangeChecked}
        checked={!!filter.find((item) => item === name)}
      >
        <Checkbox.Indicator>
          <i className="ri-check-fill text-gray-300" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        htmlFor={name}
        className="flex cursor-pointer items-center gap-2 text-secondary-blue/80 hover:font-semibold peer-aria-checked:text-primary-blue dark:peer-aria-checked:text-gray-300"
      >
        {icon ? (
          <>
            <Image
              alt=""
              height="24"
              width="24"
              src={`https://cdn.simpleicons.org/${icon}`}
            />
            <p>{name}</p>
          </>
        ) : (
          <strong>{name}</strong>
        )}
      </label>
    </span>
  )
}
