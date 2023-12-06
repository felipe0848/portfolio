import { CodeViewContext } from '@/context/code-view'
import { infosType } from '@/db/folders'
import { useContext } from 'react'

interface FileItemProps {
  item: infosType
}
export default function FileItem({ item }: FileItemProps) {
  const { addCode } = useContext(CodeViewContext)
  function handleAddCode() {
    addCode(item)
  }
  return (
    <span
      className="ml-5 flex cursor-pointer items-baseline gap-1 hover:font-semibold dark:hover:text-gray-300"
      onClick={handleAddCode}
    >
      <i className="ri-markdown-fill" />
      {item.innerText}
    </span>
  )
}
