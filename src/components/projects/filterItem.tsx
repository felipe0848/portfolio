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
  // console.log(filter)
  function handleChangeChecked(check: boolean) {
    changeFilter(name, check)
  }
  return (
    <span className="flex items-center gap-5">
      <Checkbox.Root
        className="peer border-2 border-secondary-blue w-6 h-6 rounded flex justify-center items-center data-[state=checked]:bg-secondary-blue hover:outline outline-lines/90"
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
        className="peer-aria-checked:text-gray-300 flex items-center gap-2 cursor-pointer text-secondary-blue"
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
