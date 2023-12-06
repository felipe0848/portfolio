export default function Welcome() {
  return (
    <div className="text-primary-blue dark:text-primary-gray sm:min-w-[425px]">
      <p className="text-bodyText font-medium">E ai? Eu sou o</p>
      <h1 className="text-5xl leading-[4rem] phone-xl:text-headline ">
        Felipe Soares
      </h1>
      <h2 className="text-2xl text-secondary-purple phone-xl:text-subHeadline">
        {'> '}Desenvolvedor Full-stack
      </h2>

      <div className="mt-20 flex flex-col">
        <span className="text-slate-600 dark:text-secondary-blue">
          {'// Você também pode ver isso na página do Github'}
        </span>
        <span>
          <span className="text-blue-900 dark:text-secondary-purple">
            const{' '}
          </span>
          <span className="text-green-700 dark:text-accent-green">
            githubLink{' '}
          </span>
          <span>= </span>
          <a
            href="https://github.com/felipe0848/portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:underline dark:text-accent-red"
          >
            {'“https://github.com/felipe0848”'}
          </a>
        </span>
      </div>
    </div>
  )
}
