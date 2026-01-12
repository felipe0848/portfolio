import { v4 as uuidv4 } from 'uuid'
export type infosType = {
  id: string
  type: 'title' | 'folder' | 'mail' | 'phone' | 'markdown'
  innerText: string
  content: infosType[]
}
export interface aboutInfosType {
  data: infosType[]
}
export const aboutInfos = {
  data: [
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'Infomações pessoais',
      content: [
        {
          type: 'folder',
          innerText: 'Bio',
          content: [
            {
              type: 'markdown',
              innerText: 'apresentação',
              content: `# Olá, me chamo **Felipe**!
Sou um desenvolvedor web Fullstack, com conhecimento em **JavaScript**, **TypeScript**, **React** e **Next.js**. 

Atualmente, estou cursando **Sistemas de Informação na Universidade Federal do Mato Grosso do Sul**, buscando aprimorar minhas habilidades e aplicá-las em projetos inovadores. Estou sempre me atualizando e buscando novos cursos para estar na vanguarda da tecnologia e de tendências do desenvolvimento web.
              `,
            },
          ],
        },
        {
          type: 'folder',
          innerText: 'Formação',
          content: [
            {
              type: 'markdown',
              innerText: 'Graduação',
              content: `## **Bacharelado** (Em andamento)

Universidade Federal do Mato Grosso do Sul - **Sistemas de Informação**

02/2023 - 12/2026`,
            },
            {
              type: 'markdown',
              innerText: 'React',
              content: `# Curso de React - **OneBitCode**

Durante o curso de React, adquiri habilidades essenciais na construção de
interfaces dinâmicas e interativas. Aprendi a criar componentes reutilizáveis,
manipular o estado da aplicação e integrar com APIs.

### Alguns tópicos que tenho conhecimento:
- Principais Hooks;
- Context API;
- Next.js.`,
            },
            {
              type: 'markdown',
              innerText: 'NodeJS',
              content: `# Curso de Node - **OneBitCode**
              
 No decorrer do curso de Node.js, adquiri habilidades para construir aplicativos
do lado do servidor, compreendendo como criar APIs eficientes no padrão REST, 
lidar com solicitações HTTP e gerenciar bancos de dados.

### Alguns tópicos que tenho conhecimento:
- Express;
- Criação de APIs;
- Integração com Banco de Dados (SQL e NoSQL).`,
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'Informações profissionais',
      content: [
        {
          type: 'folder',
          innerText: 'Experiencia',
          content: [
            {
              type: 'markdown',
              innerText: 'Razzo Tech',
              content: `# Cargo: 
**Desenvolvedor Full Stack** (03/2024 - presente)
- Otimizei o funcionamento da aplicação em Node.js e reprojetei a estratégia de execução em produção, reduzindo o custo de infraestrutura em **aproximadamente 40%**, ao eliminar o uso ineficiente de máquinas virtuais com múltiplos cores e apenas uma instância ativa por máquina.

- Implementei estratégias de cache para consultas crı́ticas, otimizando a execução recorrente de uma query e reduzindo o tempo total acumulado de processamento de aproximadamente **25 horas** para **1 hora e 48 minutos**, com impacto direto na performance do banco de dados.

- Liderei o fork e a reestruturação de uma aplicação financeira para um modelo whitelabel, que atualmente atende mais de **70 clientes**, garantindo escalabilidade, isolamento de configurações e confiabilidade por meio de automações, CI/CD e testes automatizados.

- Implementei a integração de novos produtos financeiros, transformando a aplicação de uma solução de produto único para uma plataforma multiproduto, o que resultou em um aumento aproximado de **45% no
faturamento**.

- **Tech Stack**: TypeScript, JavaScript, Node.js, NestJS, React, React Native, MongoDB, Redis, Prisma, Vite,
Next.js, TailwindCSS, Styled-Components, Jest, Vitest, Playwright, Git, GitHub, GitHub Actions


**Desenvolvedor Full Stack** (12/2023 - 03/2024)
- Participei da migração de uma plataforma marketplace, migrando de **Angular** para **React**, o que possibilitou a expansão do negócio para novos estados e facilitou o controle de NFs, além do gerenciamento de fornecedores e clientes, utilizando Styled-Components, RadixUI e Shadcn.

- Atuei como principal desenvolvedor no lançamento de um aplicativo mobile de cunho financeiro, focado em empréstimos pessoais, disponibilizado para mais de **30 mil** usuários, utilizando React Native, Expo e TypeScript.

- **Tech Stack**: React, React Native, Expo, TypeScript, JavaScript, Vite, TailwindCSS, Styled-Components, Radix UI, Shadcn, Git, GitHub
`,
            },
            {
              type: 'markdown',
              innerText: 'JBS - Seara Alimentos',
              content: `# Cargo: 
**Planejamento Agropecuário** (05/2021 - 06/2023)
# Principais atividades desempenhadas: 
  **Focado em matérias-primas:** correlacionando fluxo
  de descargas prioritárias e gestão do consumo MP diário;

  **Focado em produto final:** fluxo de produção com demanda oriunda de campo;
  correlacionando estoque de produto acabado x frota disponível x estoque do
  produtor no campo.`,
            },
            {
              type: 'markdown',
              innerText: 'Prepara Cursos',
              content: `# Cargo: 
**Educador** (01/2018 - 05/2021)
# Principais atividades desempenhadas: 
  Atender e solucionar as dúvidas de alunos.
  Desenvolver atividades complementares para melhorar o aprendizado do aluno.`,
            },
          ],
        },
        {
          type: 'folder',
          innerText: 'Habilidades',
          content: [
            {
              type: 'markdown',
              innerText: 'tecnologias',
              content: `**JavaScript**
- Promisse
- Consumo de AP
- POO

**TypeScript**
- Tipagem

**Node JS**
- Express
- Fastify
- Testes Automatizados

**React**
- Hooks
- Context API
- Testes Automatizados

**Next JS**
- App Router
- Router Pages

**Python**
- Básico em programação

**C**
- Básico em programação
- Uso de ponteiros`,
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      type: 'title',
      innerText: 'Contato',
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
