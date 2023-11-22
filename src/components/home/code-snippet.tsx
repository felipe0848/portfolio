import { snippetType } from '@/db/snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'
import '@/lib/highlight-custom.css'

interface CodeSnippetProps {
  item: snippetType
}
export default function CodeSnippet({ item }: CodeSnippetProps) {
  return (
    <SyntaxHighlighter language={item.language} useInlineStyles={false}>
      {item.code}
    </SyntaxHighlighter>
  )
}
