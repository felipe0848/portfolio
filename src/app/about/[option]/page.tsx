/* eslint-disable prettier/prettier */

import Explorer from "@/components/about-me/explorer"



export default function MainAbout() {
  return (
    <div className="flex grow">
      <Explorer />


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
