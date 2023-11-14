'use client'
import Image from 'next/image'
import blursImg from '@/assets/background-blurs.svg'
import SwiperSnippets from '@/components/home/swiper-snippets'
import Welcome from '@/components/home/welcome'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const screenXl = useMediaQuery({ query: '(min-width:1280px)' })
  return (
    <div className="flex flex-col gap-20 h-full w-full justify-center items-center xl:flex-row p-8">
      <Welcome />

      <div className="hidden xl:h-[700px] sm:w-full sm:max-w-[700px] sm:flex ">
        <SwiperSnippets direction={screenXl ? 'vertical' : 'horizontal'} />
      </div>

      <Image
        src={blursImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 opacity-40 blur-3xl z-0 object-cover xl:left-1/3"
        width={750}
        height={780}
      />
    </div>
  )
}
