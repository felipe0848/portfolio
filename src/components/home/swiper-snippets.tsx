'use client'
import CodeSnippet from '@/components/home/code-snippet'
import { snippets } from '@/db/snippets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export default function SwiperSnippets() {
  const screenXl = useMediaQuery({ query: '(min-width:1280px)' })
  const direction = screenXl ? 'vertical' : 'horizontal'
  return (
    <div className="hidden xl:h-[700px] sm:w-full sm:max-w-[700px] sm:flex ">
      <Swiper
        direction={direction}
        slidesPerView={direction === 'vertical' ? 2 : 1}
        className="w-full h-full"
        spaceBetween={18}
        autoplay={{
          delay: 10000,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {snippets.map((item) => (
          <SwiperSlide key={item.id}>
            <CodeSnippet item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
