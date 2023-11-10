export const snippets = [
  {
    id: 1,
    language: 'javascript',
    code: `export default function Hello() {
  return (
    <div>
      <p> Hi all, I am </p>
      <h1> Felipe Soares </h1>
      <h2> > Full-stack developer </h2>
      <p> // you can also see it on my Github page </p>
      <span>
        <p> const githubLink = </p>
        <a href="https://github.com/felipe0848">
          “https://github.com/felipe0848”
        </a>
      </span>
      </div>`,
  },
  {
    id: 2,
    language: 'javascript',
    code: `export default function SwiperSnippets() {
  return (
    <Swiper 
      direction="vertical" 
      slidesPerView={2} 
    >
      {snippets.map((item) => (
        <SwiperSlide key={item.id}>
          <CodeSnippet item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}`,
  },
  {
    id: 3,
    language: 'typescript',
    code: `import { snippetType } from '@/db/snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface CodeSnippetProps {
  item: snippetType
}
export default function CodeSnippet({ item }: CodeSnippetProps) {
  return (
    <SyntaxHighlighter language={item.language} useInlineStyles={false}>
      {item.code}
    </SyntaxHighlighter>
  )
}`,
  },
]
export type snippetType = (typeof snippets)[0]
