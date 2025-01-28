# DalyGames

> Plataforma web de catálogo de jogos.

O **DalyGames** é uma aplicação moderna desenvolvida com as últimas tecnologias do **Next.js**, focada em fornecer uma experiência intuitiva para explorar um catálogo de jogos. O projeto inclui recursos avançados para visualizar informações detalhadas sobre jogos.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

## Descrição do Projeto

O **DalyGames** é um catálogo que permite aos usuários visualizar informações detalhadas sobre diversos jogos usando uma API fake. Ele oferece:

- Um catálogo abrangente de jogos com dados variados.
- Visualização detalhada de cada jogo, incluindo informações como gênero, plataforma, data de lançamento e sugestões de outros jogos relacionados.
- Uma página de perfil fictícia onde os usuários podem adicionar até três jogos aos seus favoritos.

## Funcionalidades

- **Catálogo de Jogos:** Exibição detalhada de jogos com informações únicas.
- **Interface Moderna:** Navegação responsiva com Tailwind CSS.
- **Perfil Fictício:** Adição de até três jogos favoritos no perfil do usuário.

## Tecnologias Utilizadas

- **Next.js:** Framework moderno para construção de aplicações web.
- **React:** Biblioteca para construção de interfaces de usuário.
- **React Icons:** Coleção de ícones para React.
- **Tailwind CSS:** Framework CSS utilitário.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática.

## Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/yurisdevops/dalygames.git
cd dalygames
```

### 2. Instalar Dependências

Com `npm`:

```bash
npm install
```

Com `yarn`:

```bash
yarn install
```

### 3. Configurar as Variáveis de Ambiente

Adicione as seguintes variáveis no arquivo `.env`:

```env
NEXT_API_URL=https://sujeitoprogramador.com/
```

### 4. Executar o Projeto

Com `npm`:

```bash
npm run dev
```

Com `yarn`:

```bash
yarn dev
```

Acesse a aplicação no navegador: [DalyGames](https://dalygames-pearl.vercel.app/).

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera os arquivos para produção.
- **`npm run start`**: Inicia a aplicação em produção.
- **`npm run lint`**: Executa o linter para verificar erros de código.

## Estrutura do Projeto

- **public** (arquivos públicos)
- **src**
  - **app**
    - **game** (páginas de jogos)
    - **search** (páginas de busca)
    - **profile** (páginas de perfil)
    - `globals.css` (estilos globais)
    - `layout.tsx` (layout principal)
    - `page.tsx` (página inicial)
  - **components** (componentes reutilizáveis)
  - **utils** (arquivos utilitários e tipos)

## Contato

Desenvolvido por [Yuri Souza](https://github.com/yurisdevops). Entre em contato para dúvidas ou sugestões!

---

