'use client'
import { CodeViewContext } from '@/context/code-view'
import { useContext } from 'react'
import CodeWindow from './code-window'
import '@/lib/highlight-custom.css'
import SyntaxHighlighter from 'react-syntax-highlighter'

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
        <div className="border-lines px-3 py-2 md:border-b">
          <SyntaxHighlighter
            language={inFocus.language}
            useInlineStyles={false}
            showLineNumbers
            lineNumberStyle={{
              color: 'var(--secondary-blue)',
            }}
            customStyle={{
              background: 'transparent',
              border: 'none',
              padding: '1rem 0.5rem',
              overflow: 'auto',
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
