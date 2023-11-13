export default function Welcome() {
  return (
    <div className="text-primary-gray sm:min-w-[425px]">
      <p className="text-bodyText font-medium">Hi all, I am</p>
      <h1 className="text-5xl phone-xl:text-headline leading-[4rem] ">
        Felipe Soares
      </h1>
      <h2 className="text-2xl phone-xl:text-subHeadline text-secondary-purple">
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
  )
}
