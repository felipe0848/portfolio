'use client'
import { infos } from '@/db/folders'
import * as Accordion from '@radix-ui/react-accordion'
import ExplorerItem from './explorer-item'

export default function Explorer() {
  return (
    <Accordion.Root
      type="multiple"
      className="flex flex-col border-x min-w-[300px] border-lines"
    >
      {infos.map((item) => (
        <ExplorerItem item={item} key={item.id} />
      ))}
    </Accordion.Root>
  )
}
