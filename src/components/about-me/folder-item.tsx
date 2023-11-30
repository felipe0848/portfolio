import { infosType } from '@/db/folders'
import * as Collapsible from '@radix-ui/react-collapsible'
import FileItem from './file-item'
interface FolderItemProps {
  child: infosType
}
export default function FolderItem({ child }: FolderItemProps) {
  return (
    <Collapsible.Root className="flex flex-col items-start gap-1">
      <Collapsible.Trigger asChild>
        <span className="flex cursor-pointer items-baseline gap-1 hover:text-gray-300 first:[&>i]:data-[state=open]:rotate-90">
          <i className="ri-arrow-right-s-line" />
          <i className="ri-folder-3-fill" />
          <p>{child.innerText}</p>
        </span>
      </Collapsible.Trigger>
      <Collapsible.Content>
        {child.content.map((item) => (
          <FileItem key={item.innerText} item={item} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
