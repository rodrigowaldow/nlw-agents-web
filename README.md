# NLW Agents

Este projeto, **NLW Agents**, foi desenvolvido durante o evento da Rocketseat. Trata-se de uma aplicação web React moderna, utilizando as melhores práticas e bibliotecas do ecossistema JavaScript/TypeScript.

## Tecnologias e Bibliotecas Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **React Router DOM 7**: Gerenciamento de rotas SPA.
- **@tanstack/react-query**: Gerenciamento de dados assíncronos e cache de requisições.
- **Tailwind CSS 4**: Utilitário para estilização rápida e responsiva.
- **class-variance-authority**, **clsx**, **tailwind-merge**: Utilitários para composição dinâmica de classes CSS.
- **Radix UI**: Componentes acessíveis e semânticos.
- **Lucide React**: Ícones SVG modernos.
- **Vite**: Bundler e servidor de desenvolvimento rápido.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.

## Padrões de Projeto

- **Componentização**: Componentes reutilizáveis e desacoplados.
- **Hooks**: Uso extensivo de hooks para lógica de estado e efeitos colaterais.
- **Atomic Design**: Organização dos componentes por granularidade (ex: `components/ui`).
- **Aliases**: Utilização de aliases no import para melhor organização (`@/components`, `@/lib`, etc).

## Setup e Configuração

1. **Clone o repositório**
   ```sh
   git clone <url-do-repo>
   cd web
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```sh
   npm run dev
   ```

4. **Build para produção**
   ```sh
   npm run build
   ```

## Observações

- Certifique-se de que o backend está rodando em `http://localhost:3333` para que as requisições funcionem corretamente.
- O projeto utiliza configuração de aliases e Tailwind CSS customizado. Ajuste o VSCode para reconhecer os paths do TypeScript se necessário.

---

Desenvolvido durante o evento NLW da Rocketseat