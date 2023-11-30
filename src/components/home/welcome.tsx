export default function Welcome() {
  return (
    <div className="text-primary-gray sm:min-w-[425px]">
      <p className="text-bodyText font-medium">Hi all, I am</p>
      <h1 className="text-5xl leading-[4rem] phone-xl:text-headline ">
        Felipe Soares
      </h1>
      <h2 className="text-2xl text-secondary-purple phone-xl:text-subHeadline">
        {'> '}Full-stack developer
      </h2>

      <div className="mt-20 flex flex-col">
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
