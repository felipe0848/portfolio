import { v4 as uuidv4 } from 'uuid'
export type infosType = {
  id: string
  type: 'title' | 'folder' | 'mail' | 'phone' | 'markdown'
  innerText: string
  content: infosType[]
}
export interface aboutInfosType {
  me: infosType[]
  pro: infosType[]
  hobbies: infosType[]
  contacts: infosType[]
}
export const aboutInfos = {
  me: [
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'infomações pessoais',
      content: [
        {
          type: 'folder',
          innerText: 'bio',
          content: [
            {
              type: 'markdown',
              innerText: 'apresentação',
              content: `Sou um desenvolvedor web Fullstack, com conhecimento em **JavaScript**, 
**TypeScript**, **React** e **Next.js**. 

Atualmente, estou cursando Sistemas de Informação na Universidade Federal do Mato
Grosso do Sul, buscando aprimorar minhas habilidades e aplicá-las em projetos 
inovadores. Estou sempre me atualizando e buscando novos cursos para estar na 
vanguarda da tecnologia e de tendências do desenvolvimento web.
              `,
            },
          ],
        },
        {
          type: 'folder',
          innerText: 'interesses',
          content: [
            {
              type: 'markdown',
              innerText: 'lista de interesses',
              content: `*Uma lista de coisas que tenho interesse:*
## Vôlei
## Músicas antigas
## Jogos de FPS
## Mercado/Economia
`,
            },
          ],
        },
        {
          type: 'folder',
          innerText: 'formação',
          content: [
            {
              type: 'markdown',
              innerText: 'Graduação',
              content: `#Bacharelado *(Em andamento)*
*Universidade Federal do Mato Grosso do Sul - Sistemas de Informação*
02/2023 - 12/2026`,
            },
            {
              type: 'markdown',
              innerText: 'React',
              content: `Durante o curso de React, adquiri habilidades essenciais na construção de
interfaces dinâmicas e interativas. Aprendi a criar componentes reutilizáveis,
manipular o estado da aplicação e integrar com APIs.

Alguns tópicos que tenho conhecimento:
## Principais Hooks;
## Context API;
## Next.js.`,
            },
            {
              type: 'markdown',
              innerText: 'NodeJS',
              content: `No decorrer do curso de Node.js, adquiri habilidades para construir aplicativos
do lado do servidor, compreendendo como criar APIs eficientes no padrão REST, 
lidar com solicitações HTTP e gerenciar bancos de dados.

Alguns tópicos que tenho conhecimento:
## Express;
## Criação de APIs;
## Integração com Banco de Dados (SQL e NoSQL).`,
            },
          ],
        },
      ],
    },
  ],
  pro: [
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'informações profissionais',
      content: [
        {
          type: 'folder',
          innerText: 'experiencia',
          content: [
            {
              type: 'markdown',
              innerText: 'JBS - Seara Alimentos',
              content: `#Cargo: 
  Planejamento Agropecuário (05/2021 - 06/2023)
#Principais atividades desempenhadas: 
  *Focado em matérias-primas:* correlacionando fluxo
  de descargas prioritárias e gestão do consumo MP diário;
  *Focado em produto final:* fluxo de produção com demanda oriunda de campo;
  correlacionando estoque de produto acabado x frota disponível x estoque do
  produtor no campo.`,
            },
            {
              type: 'markdown',
              innerText: 'Prepara Cursos',
              content: `#Cargo: 
  Educador (01/2018 - 05/2021)
#Principais atividades desempenhadas: 
  Atender e solucionar as dúvidas de alunos.
  Desenvolver atividades complementares para melhorar o aprendizado do aluno.`,
            },
          ],
        },
        {
          type: 'folder',
          innerText: 'habilidades',
          content: [
            {
              type: 'markdown',
              innerText: 'tecnologias',
              content: `*JavaScript*
## Promisse
## Consumo de AP
## POO

*TypeScript*
## Tipagem

*Node JS*
## Express
## Fastify
## Testes Automatizados

*React*
## Hooks
## Context API
## Testes Automatizados

*Next JS*
## App Router
## Router Pages

*Python*
## Básico em programação

*C*
## Básico em programação
## Uso de ponteiros`,
            },
          ],
        },
      ],
    },
  ],

  contacts: [
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'contato',
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
  ],
} as unknown as aboutInfosType
