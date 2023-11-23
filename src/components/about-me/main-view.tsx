'use client'
import { CodeViewContext } from '@/context/code-view'
import { useContext } from 'react'
import CodeWindow from './code-window'
import '@/lib/highlight-without-bg.css'
import SyntaxHighlighter from 'react-syntax-highlighter'

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
        <div className="border-b border-lines px-3 py-2">
          <SyntaxHighlighter
            language={inFocus.language}
            useInlineStyles={false}
            showLineNumbers
            lineNumberStyle={{
              color: 'var(--secondary-blue)',
            }}
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
