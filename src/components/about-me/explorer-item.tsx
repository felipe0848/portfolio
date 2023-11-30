import { infosType } from '@/db/folders'
import * as Accordion from '@radix-ui/react-accordion'
import FolderItem from './folder-item'

interface ExplorerItemProps {
  item: infosType
}
export default function ExplorerItem({ item }: ExplorerItemProps) {
  return (
    <Accordion.Item value={item.innerText}>
      <Accordion.Trigger asChild>
        <span className="flex cursor-pointer gap-1 border-b border-lines px-3 py-4 text-gray-300 hover:text-white [&>i]:data-[state=open]:rotate-90">
          <i className="ri-arrow-right-s-fill" />
          <h3>{item.innerText}</h3>
        </span>
      </Accordion.Trigger>

      <Accordion.Content asChild>
        <div className="flex flex-col gap-1 px-4 pb-4 pt-2 ">
          {item.content.map((child) =>
            child.type === 'folder' ? (
              <FolderItem key={child.innerText} child={child} />
            ) : (
              <a
                className="flex cursor-pointer items-baseline gap-1 hover:text-gray-300"
                key={child.innerText}
                href={`${
                  child.type === 'mail' ? 'mailto:' + child.innerText : '#'
                }`}
              >
                <i className={`ri-${child.type}-fill`} />
                {child.innerText}
              </a>
            ),
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
}
