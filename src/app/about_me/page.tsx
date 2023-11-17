export default function AboutMe() {
  return (
    <div className="flex grow">
      <aside className="flex flex-col gap-8 p-4">
        <button className="px-2">
          <i className="ri-terminal-box-fill ri-xl" />
        </button>
        <button className="px-2">
          <i className="ri-sparkling-2-fill ri-xl" />
        </button>
        <button className="px-2">
          <i className="ri-gamepad-fill ri-xl" />
        </button>
      </aside>

      <div className="flex flex-col border-x border-lines">
        <h3 className="px-3 py-4 border-b border-lines text-white">
          <i className="ri-arrow-down-s-fill" />
          personal-info
        </h3>
        <div className="px-3 py-4 flex flex-col gap-1">
          <p>
            <i className="ri-arrow-right-s-line" />
            <i className="ri-folder-3-fill" />
            bio
          </p>
          <p>
            <i className="ri-arrow-right-s-line" />
            <i className="ri-folder-3-fill" />
            interests
          </p>
          <p>
            <i className="ri-arrow-down-s-line" />
            <i className="ri-folder-3-fill" />
            education
          </p>
          <p>
            <i className="ri-markdown-fill" />
            high-school
          </p>
          <p>
            <i className="ri-markdown-fill" />
            university
          </p>
        </div>
        <h3 className="px-3 py-4 border-y border-lines text-white">
          <i className="ri-arrow-down-s-fill" />
          contacts
        </h3>
        <div className="px-3 py-4 flex flex-col gap-1 w-max">
          <p>
            <i className="ri-mail-fill" />
            user@gmail.com
          </p>
          <p>
            <i className="ri-phone-fill" />
            +55 67 9 9692-8852
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="border-b border-lines">
          <p className="px-3 py-2 min-w-[12rem] w-fit flex justify-between border-r border-lines">
            title
            <i className="ri-close-line" />
          </p>
        </div>
        <div className="border-b border-lines px-8 py-5">
          <pre>
            {`/**
 * About me
 * I have 5 years of еxperience in web development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
 * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco in
 * nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit 
 *
 * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
 * nulla pariatur. Excepteur sint occaecat officia deserunt mollit est laborum.
 */`}
          </pre>
        </div>
      </div>
    </div>
  )
}
