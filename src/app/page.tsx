import Image from 'next/image'
import blursImg from '@/assets/background-blurs.svg'
import SwiperSnippets from '@/components/home/swiper-snippets'
import Welcome from '@/components/home/welcome'

export default function Home() {
  return (
    <div className="relative flex h-full w-full grow flex-col items-center justify-center gap-20 overflow-auto p-8 sm:justify-start xl:flex-row">
      <Welcome />

      <SwiperSnippets />

      <Image
        src={blursImg}
        alt=""
        className="absolute top-1/2 z-0 -translate-y-1/2 select-none object-cover opacity-40 blur-3xl xl:left-1/3"
        width={750}
        height={780}
      />
    </div>
  )
}
