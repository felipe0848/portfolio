export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-t border-lines">
      <div className="flex px-6 gap-4 items-center">
        <p>find me in</p>
        <a
          href="https://www.linkedin.com/in/felipe0848/"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-4 border-x border-lines hover:text-gray-300"
        >
          <i className="ri-linkedin-box-fill ri-xl" />
        </a>
      </div>
      <a
        href="https://github.com/felipe0848"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300"
      >
        <div className="flex px-6 py-4 border-l border-lines gap-2 items-center">
          <p>@felipe0848</p>
          <i className="ri-github-fill ri-xl" />
        </div>
      </a>
    </footer>
  )
}
