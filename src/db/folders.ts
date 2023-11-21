export type infosType = {
  id: number
  type: 'title' | 'folder' | 'mail' | 'phone' | 'markdown'
  innerText: string
  content: infosType[]
}

export const infos = [
  {
    id: 1,
    type: 'title',
    innerText: 'personal-info',
    content: [
      {
        type: 'folder',
        innerText: 'bio',
        content: [
          {
            type: 'markdown',
            innerText: 'story',
            content: `/**
            * About me
            * I have 5 years of еxperience in web development lorem ipsum dolor sit amet, 
            * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco in
            * nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit 
            *
            * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
            * nulla pariatur. Excepteur sint occaecat officia deserunt mollit est laborum.
            */`,
          },
        ],
      },
      {
        type: 'folder',
        innerText: 'interests',
        content: [
          {
            type: 'markdown',
            innerText: 'voleyball',
            content: `/**
            * About me
            * I have 5 years of еxperience in web development lorem ipsum dolor sit amet, 
            * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco in
            * nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit 
            *
            * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
            * nulla pariatur. Excepteur sint occaecat officia deserunt mollit est laborum.
            */`,
          },
        ],
      },
      {
        type: 'folder',
        innerText: 'education',
        content: [
          {
            type: 'markdown',
            innerText: 'high-school',
            content: `/**
            * About me
            * I have 5 years of еxperience in web development lorem ipsum dolor sit amet, 
            * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco in
            * nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit 
            *
            * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
            * nulla pariatur. Excepteur sint occaecat officia deserunt mollit est laborum.
            */`,
          },
          {
            type: 'markdown',
            innerText: 'university',
            content: `/**
            * About me
            * I have 5 years of еxperience in web development lorem ipsum dolor sit amet, 
            * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco in
            * nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit 
            *
            * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  
            * nulla pariatur. Excepteur sint occaecat officia deserunt mollit est laborum.
            */`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'title',
    innerText: 'contacts',
    content: [
      {
        type: 'mail',
        innerText: 'felipe.11.11@hotmail.com',
      },
      {
        type: 'phone',
        innerText: '+55 (67) 9 9692-8852',
      },
    ],
  },
] as unknown as infosType[]
