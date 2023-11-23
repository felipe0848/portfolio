import { CodeViewContext } from '@/context/code-view'
import { useContext } from 'react'

interface CodeWindowProps {
  title: string
}
export default function CodeWindow({ title }: CodeWindowProps) {
  const { closeCode, inFocus, changeFocus } = useContext(CodeViewContext)
  function handleCloseWindow() {
    closeCode(title)
  }
  function handleChangeFocus() {
    changeFocus(title)
  }
  const onInFocus = inFocus.title === title
  return (
    <div className="relative">
      <span
        // eslint-disable-next-line prettier/prettier
        className={`px-3 py-2 min-w-[12rem] w-fit flex justify-between border-r border-lines cursor-pointer ${onInFocus ? 'text-gray-300 bg-primary-blue border-b border-b-accent-red' : ''}`}
        onClick={handleChangeFocus}
      >
        <p>{title}</p>
      </span>
      <button
        title="Fechar arquivo"
        className="hover:text-gray-300 absolute right-3 top-2"
        onClick={handleCloseWindow}
      >
        <i className="ri-close-line" />
      </button>
    </div>
  )
}
