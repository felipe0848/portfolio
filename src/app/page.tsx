import Image from 'next/image'
import blursImg from '@/assets/background-blurs.svg'
import SwiperSnippets from '@/components/home/swiper-snippets'
import Welcome from '@/components/home/welcome'

export default function Home() {
  return (
    <div className="flex gap-20 h-full w-full justify-center items-center">
      <Welcome />

      <div className="h-[700px] flex justify-center items-center">
        <SwiperSnippets />

        <Image
          src={blursImg}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 opacity-40 blur-3xl z-0 object-cover"
          width={750}
          height={780}
        />
      </div>
    </div>
  )
}
