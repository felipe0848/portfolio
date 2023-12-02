import Image, { StaticImageData } from 'next/image'
import emptyFolderImg from '@/assets/empty-folder.svg'

interface EmptyViewProps {
  ImgURL?: StaticImageData | string
  title?: string
  subtitle?: string
}

export default function EmptyView({ ImgURL, title, subtitle }: EmptyViewProps) {
  return (
    <div className="flex flex-col items-center justify-center md:p-16">
      <Image
        src={ImgURL || emptyFolderImg}
        alt=""
        width={200}
        className="select-none mix-blend-soft-light grayscale"
      />
      <h1 className="-mt-6 w-full text-center text-2xl opacity-60 phone-xl:text-4xl md:-mt-2">
        {title || 'Parece vazio por aqui.'}
      </h1>
      <h3 className="text-center text-base opacity-60 phone-xl:text-xl">
        {subtitle || 'Abra um arquivo para começar!'}
      </h3>
    </div>
  )
}
