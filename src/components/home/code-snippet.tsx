import { snippetType } from '@/db/snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'
import '@/lib/highlight-custom.css'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface PreTagComponentProps {
  children: ReactNode
}
function PreTagComponent({ children }: PreTagComponentProps) {
  return (
    <pre className="block overflow-clip rounded-lg border border-slate-400 bg-slate-200 p-5 text-sm dark:border-lines dark:bg-primary-dark-blue dark:text-secondary-blue">
      {children}
    </pre>
  )
}

interface CodeSnippetProps {
  item: snippetType
}
export default function CodeSnippet({ item }: CodeSnippetProps) {
  const { theme } = useTheme()
  return (
    <SyntaxHighlighter
      language={item.language}
      useInlineStyles={theme === 'light' || false}
      PreTag={PreTagComponent}
      style={docco}
    >
      {item.code}
    </SyntaxHighlighter>
  )
}
