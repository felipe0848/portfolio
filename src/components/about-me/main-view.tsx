'use client'
import { CodeViewContext } from '@/context/code-view'
import { useContext } from 'react'
import CodeWindow from './code-window'
import '@/lib/highlight-custom.css'
import Markdown from 'react-markdown'

export default function MainView() {
  const { codes, inFocus } = useContext(CodeViewContext)

  return (
    <div className="flex w-full flex-col overflow-hidden border-t border-lines md:border-t-0">
      <div className="flex overflow-auto whitespace-nowrap border-b border-lines bg-primary-dark-blue">
        {codes.map((code) => (
          <CodeWindow key={code.title} title={code.title} />
        ))}
      </div>
      {codes.length > 0 ? (
        <Markdown className="[&>h1]:mk-h1 [&>h2]:mk-h2 [&>h3]:mk-h3 [&>p]:mk-p [&>ul]:mk-ul border-lines p-3  text-gray-400 md:border-b md:px-8 md:py-6">
          {inFocus.content}
        </Markdown>
      ) : (
        // adicionar uma imagem de vazio
        ''
      )}
    </div>
  )
}
