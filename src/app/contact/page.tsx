import Image from 'next/image'
import profileImg from '@/assets/profile-pic.png'
import workanaLogo from '@/assets/workana.svg'
import backgroundBlur from '@/assets/background-blurs.svg'

export default function Contact() {
  return (
    <div className="relative flex grow flex-col items-center justify-center gap-8 p-8 lg:flex-row">
      <Image
        src={profileImg}
        alt=""
        width={500}
        height={500}
        className="z-10"
      />
      <div className="z-10">
        <h1 className="text-5xl leading-[4rem] text-gray-300 phone-xl:text-headline">
          Felipe Soares
        </h1>
        <h2 className="text-2xl text-secondary-purple phone-xl:text-subHeadline">
          {'> '}Full-stack developer
        </h2>
        <div className="mt-6 flex flex-col justify-start gap-2 text-lg">
          <a href="#" className="flex items-center gap-2">
            <i className="ri-phone-fill ri-lg" />
            <p>+55 67 9 9692-8852</p>
          </a>
          <a
            href="mailto:felipe.11.11@hotmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 [&>p]:hover:underline"
          >
            <i className="ri-mail-fill ri-lg" />
            <p>felipe.11.11@hotmail.com</p>
          </a>
          <a
            href="https://github.com/felipe0848"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 [&>p]:hover:underline"
          >
            <i className="ri-github-fill ri-xl" />
            <p className="hidden phone-md:flex">
              https://github.com/felipe0848
            </p>
            <p className="phone-md:hidden">github.com/felipe0848</p>
          </a>
          <a
            href="https://linkedin.com/in/felipe0848/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 [&>p]:hover:underline"
          >
            <i className="ri-linkedin-box-fill ri-xl" />
            <p className="hidden phone-md:flex">
              https://linkedin.com/in/felipe0848
            </p>
            <p className="phone-md:hidden">linkedin.com/in/felipe0848</p>
          </a>
          <a
            href="https://workana.com/freelancer/27f1abdec244a0de41f850265d36d6d8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 break-words hover:text-gray-300 [&>p]:hover:underline"
          >
            <Image src={workanaLogo} width={24} height={24} alt="" />
            <p className="hidden phone-md:flex">
              https://workana.com/felipe_soares
            </p>
            <p className="phone-md:hidden">workana.com/felipe_soares</p>
          </a>
        </div>
      </div>
      <Image
        src={backgroundBlur}
        alt=""
        className="absolute top-1/2 z-0 -translate-y-1/2 object-cover opacity-40 blur-3xl"
      />
    </div>
  )
}
