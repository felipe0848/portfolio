'use client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { CodeViewContext } from '@/context/code-view'
import { useContext } from 'react'
import CodeWindow from './code-window'

export default function MainView() {
  const { codes, inFocus } = useContext(CodeViewContext)

  return (
    <div className="flex flex-col w-full">
      <div className="border-b border-lines flex bg-primary-dark-blue">
        {codes.map((code) => (
          <CodeWindow key={code.title} title={code.title} />
        ))}
      </div>
      {codes.length > 0 ? (
        <div className="border-b border-lines px-8 py-5">
          <SyntaxHighlighter
            language={inFocus.language}
            useInlineStyles={false}
            showLineNumbers
          >
            {inFocus.content}
          </SyntaxHighlighter>
        </div>
      ) : (
        // adicionar uma imagem de vazio
        ''
      )}
    </div>
  )
}
