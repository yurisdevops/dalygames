# DalyGames

> Plataforma web para gerenciamento de jogos diários.

O **DalyGames** é uma aplicação moderna desenvolvida com as últimas tecnologias do **Next.js**, focada em fornecer uma experiência simples e intuitiva para gerenciar jogos diários. O projeto inclui recursos avançados para a criação e gerenciamento de informações sobre jogos.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

## Descrição do Projeto

O **DalyGames** permite criar, compartilhar e gerenciar informações sobre jogos diários de forma prática e segura. Ele oferece:

- Criação e gerenciamento de informações sobre jogos.
- Interface moderna e responsiva para fácil navegação.

## Funcionalidades

- **Gerenciamento de Jogos:** Criação, edição e exclusão de dados sobre jogos.
- **Interface Moderna:** Navegação responsiva com Tailwind CSS.

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

- **node_modules** (dependências do projeto)
- **public**
  - `favicon.ico`
- **src**
  - **app**
    - **game**
      - **[id]**
        - **components**
        - `layout`
        - `page.tsx`
    - **search**
      - **[title]**
        - `page.tsx`
    - **profile**
      - `components`
      - `page.tsx`
    - `favicon.ico`
    - `globals.css`
    - `layout.tsx`
    - `page.tsx`
  - **components**
    - `container`
    - `gameCard`
    - `header`
    - `input`
  - **utils**
    - **types**
      - `game.ts`
- `.env` (variáveis de ambiente)
- `.gitignore` (arquivos e diretórios a serem ignorados pelo Git)
- `next-env.d.ts` (tipagens do TypeScript para Next.js)
- `next.config.ts` (configurações do Next.js)
- `package-lock.json` (registro de dependências)
- `package.json` (configurações do projeto e dependências)
- `README.md` (documentação do projeto)
- `tsconfig.json` (configurações do TypeScript)

## Contato

Desenvolvido por [Yuri Souza](https://github.com/yurisdevops). Entre em contato para dúvidas ou sugestões!

---

### 🎮 **Gerencie seus jogos diários de maneira simples e eficiente com o DalyGames!**

---
