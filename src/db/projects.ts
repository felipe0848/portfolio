import coffeDeliveryImg from '@/assets/coffe-delivery.png'
import githubBlogImg from '@/assets/github-blog.png'
import smithStoreImg from '@/assets/smith-store.png'
import pomodoroImg from '@/assets/pomodoro.png'

export const projectsTags = [
  { name: 'React', icon: 'react' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'NextJs', icon: 'nextdotjs' },
  { name: 'Vite', icon: 'vite' },
  { name: 'NodeJs', icon: 'nodedotjs' },
  { name: 'Styled-Components', icon: 'styledcomponents' },
  { name: 'GraphQl', icon: 'graphql' },
]

export const projects = [
  {
    title: 'Coffe Delivery',
    subtitle: 'loja-de-cafe',
    imageUrl: coffeDeliveryImg,
    description:
      'O desafio era desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia',
    githubUrl: 'https://github.com/felipe0848/coffe-delivery',
    deployUrl: 'https://coffe-delivery-pink.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
  {
    title: 'GitHub Blog',
    subtitle: 'blog-github',
    imageUrl: githubBlogImg,
    description:
      'O desafio era desenvolver uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog,',
    githubUrl: 'https://github.com/felipe0848/github-blog',
    deployUrl: 'https://github-blog-tau-one.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
  {
    title: 'Smith Store',
    subtitle: 'camisetas-e-canecas',
    imageUrl: smithStoreImg,
    description:
      'O desafio era implementar um e-commerce para venda de canecas e camisetas',
    githubUrl: 'https://github.com/felipe0848/loja-virtual',
    deployUrl: 'https://loja-virtual-nu.vercel.app/',
    tags: ['React', 'NextJs', 'Styled-Components', 'GraphQl'],
  },
  {
    title: 'Pomodoro',
    subtitle: 'timer-pomodoro',
    imageUrl: pomodoroImg,
    description:
      'O desafio era implementar um timer para a utilização da técnica de Pomodoro',
    githubUrl: 'https://github.com/felipe0848/pomodoro',
    deployUrl: 'https://pomodoro-bay-tau.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
]
