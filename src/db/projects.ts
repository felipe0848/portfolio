import coffeDeliveryImg from '@/assets/coffe-delivery.png'
import githubBlogImg from '@/assets/github-blog.png'
import smithStoreImg from '@/assets/smith-store.png'
import pomodoroImg from '@/assets/pomodoro.png'
import toDoImg from '@/assets/to-do.png'

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
    description: `# Projeto Coffee Delivery
***
### 🚀 Projeto Desenvolvido com **Vite** e **Typescript** utilizando o local storage para gerenciar o carrinho e **styled-components** para a estilização.

O desafio era desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contenha as seguintes funcionalidades:

-   [x] Listagem de produtos (cafés) disponíveis para compra;
-   [x] Adicionar uma quantidade específicas de itens no carrinho;
-   [x] Exibir o total de itens no carrinho no Header;
-   [x] Exibir o valor total da soma de itens no carrinho multiplicados pelo valor;
-   [x] Validar form de endereço de entrega;
-   [x] Adicionar pagina de sucesso.

***
## 🧑🏻‍ Autor

Feito por Felipe Soares

[![Linkedin](https://img.shields.io/badge/-Felipe%20Soares-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe0848/)](https://www.linkedin.com/in/felipe0848/)
[![Email](https://img.shields.io/badge/-felipe.11.11%40hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:felipe.11.11@hotmail.com)](mailto:felipe.11.11@hotmail.com)
`,
    githubUrl: 'https://github.com/felipe0848/coffe-delivery',
    deployUrl: 'https://coffe-delivery-pink.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
  {
    title: 'GitHub Blog',
    subtitle: 'blog-github',
    imageUrl: githubBlogImg,
    description: `# Projeto GitHub Blog
***
### 🚀 Projeto Desenvolvido com **Vite** e **Typescript** e **styled-components** para a estilização.

O desafio era desenvolver uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog, que contenha as seguintes funcionalidades:

-   [x] Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub;
-   [x] Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela;
-   [x] Criar uma página para exibir um post (issue) completo;

***
## 🧑🏻‍ Autor

Feito por Felipe Soares

[![Linkedin](https://img.shields.io/badge/-Felipe%20Soares-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe0848/)](https://www.linkedin.com/in/felipe0848/)
[![Email](https://img.shields.io/badge/-felipe.11.11%40hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:felipe.11.11@hotmail.com)](mailto:felipe.11.11@hotmail.com)
`,
    githubUrl: 'https://github.com/felipe0848/github-blog',
    deployUrl: 'https://github-blog-tau-one.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
  {
    title: 'Smith Store',
    subtitle: 'camisetas-e-canecas',
    imageUrl: smithStoreImg,
    description: `# Projeto Loja Virtual
***
#### 🚀 Projeto Desenvolvido com **Next.js** e **Typescript** utilizando o local storage para gerenciar o carrinho e **styled-components** para a estilização.

O desafio era implementar um e-commerce para venda de canecas e camisetas com as seguintes funcionalidades:

-   [x] Catálogo de produtos com paginação
-   [x] Filtragem produtos por categoria
-   [x] Busca por nome do produto
-   [x] Adicionar e remover produtos do carrinho
-   [x] Finalizar compra

***
## 🧑🏻‍ Autor

Feito por Felipe Soares

[![Linkedin](https://img.shields.io/badge/-Felipe%20Soares-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe0848/)](https://www.linkedin.com/in/felipe0848/)
[![Email](https://img.shields.io/badge/-felipe.11.11%40hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:felipe.11.11@hotmail.com)](mailto:felipe.11.11@hotmail.com)
`,
    githubUrl: 'https://github.com/felipe0848/loja-virtual',
    deployUrl: 'https://loja-virtual-nu.vercel.app/',
    tags: ['React', 'NextJs', 'Styled-Components', 'GraphQl'],
  },
  {
    title: 'Pomodoro',
    subtitle: 'timer-pomodoro',
    imageUrl: pomodoroImg,
    description: `# Projeto Pomodoro
***
#### 🚀 Projeto Desenvolvido com **Vite** e **Typescript** utilizando o local storage para guardar as informações de historico e **styled-components** para a estilização.

O desafio era implementar um timer paraa utilização da técnica de Pomodoro com as seguintes funcionalidades:

-   [x] Contador em mm:ss
-   [x] Ciclos de 5 à 60 minutos
-   [x] Histórico de ciclos passados
-   [x] Intenrromper ciclo a qualquer momento
-   [x] Finalizar ciclo no final do tempo programado
***
## 🧑🏻‍ Autor

Feito por Felipe Soares

[![Linkedin](https://img.shields.io/badge/-Felipe%20Soares-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe0848/)](https://www.linkedin.com/in/felipe0848/)
[![Email](https://img.shields.io/badge/-felipe.11.11%40hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:felipe.11.11@hotmail.com)](mailto:felipe.11.11@hotmail.com)
`,
    githubUrl: 'https://github.com/felipe0848/pomodoro',
    deployUrl: 'https://pomodoro-bay-tau.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
  {
    title: 'To-Do List',
    subtitle: 'controle-de-tarefas',
    imageUrl: toDoImg,
    description: `# Projeto Controle de Tarefas (To-Do List)
***
### 🚀 Projeto Desenvolvido com **React**, **Vite** e **TypeScript**.

O desafio era desenvolver uma aplicação de controle de tarefas estilo **to-do list** com as seguintes funcionalidades:

- [x] Adicionar uma nova tarefa
- [x] Marcar e desmarcar uma tarefa como concluída
- [x] Remover uma tarefa da listagem
- [x] Mostrar o progresso de conclusão das tarefas
***
## 🧑🏻‍ Autor

Feito por Felipe Soares

[![Linkedin](https://img.shields.io/badge/-Felipe%20Soares-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe0848/)](https://www.linkedin.com/in/felipe0848/)
[![Email](https://img.shields.io/badge/-felipe.11.11%40hotmail.com-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:felipe.11.11@hotmail.com)](mailto:felipe.11.11@hotmail.com)
`,
    githubUrl: 'https://github.com/felipe0848/To-do',
    deployUrl: 'https://to-do-seven-roan.vercel.app/',
    tags: ['React', 'Vite', 'Styled-Components'],
  },
]
