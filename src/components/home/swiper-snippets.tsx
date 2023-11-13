'use client'
import CodeSnippet from '@/components/home/code-snippet'
import { snippets } from '@/db/snippets'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Autoplay } from 'swiper/modules'

interface SwiperSnippetsProps {
  direction: 'vertical' | 'horizontal'
}

export default function SwiperSnippets({ direction }: SwiperSnippetsProps) {
  return (
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
  )
}
