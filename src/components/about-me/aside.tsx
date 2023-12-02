'use client'
import { aboutInfos } from '@/db/folders'
import * as Accordion from '@radix-ui/react-accordion'
import ExplorerItem from '@/components/about-me/explorer-item'
import { useMediaQuery } from 'react-responsive'

export default function Aside() {
  const tablet = useMediaQuery({ query: '(max-width: 768px)' })
  const titles = aboutInfos.data.reduce<string[]>((titlesArray, item) => {
    titlesArray.push(`${item.innerText}`)
    return titlesArray
  }, [])
  return (
    <Accordion.Root
      type="multiple"
      className="flex min-w-[300px] flex-col border-lines "
      defaultValue={!tablet ? titles : ['']}
    >
      {aboutInfos.data.map((item) => (
        <ExplorerItem item={item} key={item.id} />
      ))}
    </Accordion.Root>
  )
}
