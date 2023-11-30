'use client'
import { aboutInfos, aboutInfosType } from '@/db/folders'
import * as Accordion from '@radix-ui/react-accordion'
import ExplorerItem from '@/components/about-me/explorer-item'
import MainView from '@/components/about-me/main-view'
import { useParams } from 'next/navigation'

export default function MainAbout() {
  const params = useParams()
  const option = String(params.option) as keyof aboutInfosType
  return (
    <div className="flex grow flex-col overflow-hidden md:flex-row">
      <Accordion.Root
        type="multiple"
        className="flex min-w-[300px] flex-col border-lines md:border-x"
      >
        {aboutInfos[option].map((item) => (
          <ExplorerItem item={item} key={item.id} />
        ))}
        {aboutInfos.contacts.map((item) => (
          <ExplorerItem item={item} key={item.id} />
        ))}
      </Accordion.Root>

      <MainView />
    </div>
  )
}
