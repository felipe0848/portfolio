export default function Footer() {
  return (
    <footer className="mt- flex items-center border-t border-lines phone-md:justify-between">
      <div className="flex items-center gap-4 pl-6">
        <p>ache-me no</p>
        <a
          href="https://www.linkedin.com/in/felipe0848/"
          target="_blank"
          rel="noreferrer"
          className="border-x border-lines px-4 py-4 hover:text-gray-300"
          title="Ir para o LinkedIn"
        >
          <i className="ri-linkedin-box-fill ri-xl" />
        </a>
      </div>
      <a
        href="https://github.com/felipe0848"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300"
        title="Ir para o Github"
      >
        <div className="flex items-center gap-2 border-l border-lines px-6 py-4">
          <p className="hidden phone-md:flex">@felipe0848</p>
          <i className="ri-github-fill ri-xl" />
        </div>
      </a>
    </footer>
  )
}
