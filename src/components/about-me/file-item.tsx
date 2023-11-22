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
      className="gap-1 flex items-baseline ml-5 hover:text-gray-300 cursor-pointer"
      onClick={handleAddCode}
    >
      <i className="ri-markdown-fill" />
      {item.innerText}
    </span>
  )
}
