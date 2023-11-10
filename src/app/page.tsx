import Image from 'next/image'
import blursImg from '@/assets/background-blurs.svg'
import SwiperSnippets from '@/components/swiper-snippets'

export default function Home() {
  return (
    <div className="flex gap-20 h-full w-full justify-center items-center">
      <div className="text-primary-gray">
        <p className="text-bodyText font-medium">Hi all, I am</p>
        <h1 className="text-headline -mt-3">Felipe Soares</h1>
        <h2 className="text-subHeadline text-secondary-purple -mt-3">
          {'> '}Full-stack developer
        </h2>

        <div className="flex flex-col mt-20">
          <span className="text-secondary-blue">
            {'// you can also see it on my Github page'}
          </span>
          <span>
            <span className="text-secondary-purple">const </span>
            <span className="text-accent-green">githubLink </span>
            <span className="text-white">= </span>
            <a
              href="https://github.com/felipe0848"
              target="_blank"
              rel="noreferrer"
              className="text-accent-red hover:underline"
            >
              {'“https://github.com/felipe0848”'}
            </a>
          </span>
        </div>
      </div>

      <div className="h-[700px] flex justify-center items-center">
        <Image
          src={blursImg}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 opacity-40 blur-3xl z-0"
          width={750}
          height={780}
        />
        <SwiperSnippets />
      </div>
    </div>
  )
}
