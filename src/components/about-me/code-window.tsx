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
        className={`pl-3 py-2 pr-12 min-w-[12rem] w-fit flex justify-between border-r border-lines cursor-pointer ${onInFocus ? 'dark:text-gray-300 bg-slate-300 dark:bg-primary-blue dark:border-b border-b-2 dark:border-b-accent-red' : ''}`}
        onClick={handleChangeFocus}
      >
        <p>{title}</p>
      </span>
      <button
        title="Fechar arquivo"
        className="absolute right-3 top-2 hover:font-semibold dark:hover:text-gray-300"
        onClick={handleCloseWindow}
      >
        <i className="ri-close-line" />
      </button>
    </div>
  )
}
