import Image from 'next/image'
import blursImg from '@/assets/background-blurs.svg'
import SwiperSnippets from '@/components/home/swiper-snippets'
import Welcome from '@/components/home/welcome'

export default function Home() {
  return (
    <div className="flex flex-col gap-20 h-full w-full justify-center items-center xl:flex-row p-8">
      <Welcome />

      <div className="hidden xl:h-[700px] xl:flex ">
        <SwiperSnippets direction="vertical" />
      </div>
      <div className="hidden sm:max-xl:w-full sm:max-xl:flex ">
        <SwiperSnippets direction="horizontal" />
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
