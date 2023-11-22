'use client'
import { infosType } from '@/db/folders'
import { ReactNode, createContext, useState } from 'react'

interface code {
  title: string
  language: string
  content: string
}

export interface CodeViewContextType {
  codes: code[]
  inFocus: code
  addCode: (item: infosType) => void
  closeCode: (title: string) => void
  changeFocus: (title: string) => void
}
export const CodeViewContext = createContext({} as CodeViewContextType)

interface CodeViewProviderProps {
  children: ReactNode
}
export default function CodeViewProvider({ children }: CodeViewProviderProps) {
  const [codes, setCodes] = useState<code[]>([])
  const [inFocus, setInFocus] = useState<code>({} as code)

  function addCode(item: infosType) {
    const newCode = {
      title: item.innerText,
      language: String(item.type),
      content: String(item.content),
    }

    if (!codes.find((code) => code.title === newCode.title))
      setCodes((state) => [...state, newCode])
    setInFocus(newCode)
  }

  function closeCode(title: string) {
    setCodes((state) => state.filter((code) => code.title !== title))
    if (inFocus.title === title) {
      setInFocus(codes[codes.length - 1])
    }
    if (codes.length === 1) {
      setInFocus({} as code)
    }
  }

  function changeFocus(title: string) {
    const newCodeFocus = codes.find((code) => code.title === title)
    if (newCodeFocus) setInFocus(newCodeFocus)
  }

  return (
    <CodeViewContext.Provider
      value={{ codes, inFocus, addCode, closeCode, changeFocus }}
    >
      {children}
    </CodeViewContext.Provider>
  )
}
