'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Checkbox from '@radix-ui/react-checkbox'

const array = new Array(7).fill(1)

export default function Aside() {
  return (
    <aside className="border-r border-lines min-w-[300px]">
      <Collapsible.Root>
        <Collapsible.Trigger asChild>
          <span className="[&>i]:data-[state=open]:rotate-90 flex items-center gap-2 border-b px-4 py-3 border-lines text-gray-300 cursor-pointer">
            <i className="ri-arrow-right-s-fill ri-xl" />
            <p>projects</p>
          </span>
        </Collapsible.Trigger>
        <Collapsible.Content className="flex flex-col px-4 py-3 gap-4">
          {array.map((item, index) => (
            <span key={index} className="flex items-center gap-5">
              <Checkbox.Root
                className="border-2 border-secondary-blue w-6 h-6 rounded flex justify-center items-center data-[state=checked]:bg-secondary-blue hover:outline outline-lines/90"
                id={`${index}`}
              >
                <Checkbox.Indicator>
                  <i className="ri-check-fill text-gray-300" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor={`${index}`}
                className="flex items-center gap-2 cursor-pointer text-secondary-blue"
              >
                <i className="ri-reactjs-fill ri-xl" />
                <p>alguma coisa {index + 1}</p>
              </label>
            </span>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </aside>
  )
}
