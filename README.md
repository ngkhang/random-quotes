# ✨Inspriational Quotes

<details>
<summary><strong>Table of Contents:</strong></summary>

- [✨Inspriational Quotes](#inspriational-quotes)
  - [Note from Vite](#note-from-vite)
    - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
  - [About this project](#about-this-project)
  - [Screenshot](#screenshot)
  - [Challenges](#challenges)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
      - [`npm run dev`](#npm-run-dev)
      - [`npm run lint`](#npm-run-lint)
      - [`npm run preview`](#npm-run-preview)
      - [`npm run build`](#npm-run-build)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [Author](#author)
  - [Show your support](#show-your-support)

</details>

---

## Note from Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---

## About this project

- This is a boilerplate for React projects using Vite, TypeScript, React Router DOM, Tailwind CSS, ESLint, and Airbnb Guide Style.
- If needed, you can install other frameworks or libraries.

---

## Screenshot

<details>
<summary><strong>Toggle Show/Hide:</strong></summary>

</details>

---

## Challenges

- Using....

---

## Features

- Features...

---

## Technologies

- This project was bootstrapped with:
  - **Vite**: <https://vitejs.dev/>
  - **React**: <https://react.dev/>
  - **React Router DOM**: <https://reactrouter.com/en/main>
  - **TypeScript**: <https://www.typescriptlang.org/>
    - React + TypeScript: <https://github.com/typescript-cheatsheets/react>
  - **Tailwind CSS**: <https://tailwindcss.com/>
  - **ESLint**: <https://eslint.org/docs/latest/rules/>
    - TypeScript-eslint: <https://typescript-eslint.io/rules/>
  - **Airbnb Guide Style**: <https://airbnb.io/javascript/>
    - React: <https://airbnb.io/javascript/react/>
  - React Icons: <https://react-icons.github.io/react-icons>

---

## Getting Started

### Installation

1. Clone this respository

   ``` powershell
   git clone https://github.com/ngkhang/random-quotes.git
   ```

2. Change to the project directory

   ``` powershell
   cd random-quotes
   ```

3. Install the dependencies:

   ``` powershell
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.

- With localhost: Run command `npm run dev` and open <http://127.0.0.1:5173/> to view it in the browser.
- With localhost and network: `npm run dev:host`

  ``` powershell
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://YOUR_IP:5173/
  ```

#### `npm run lint`

The project uses ESLint, ESLint-Ts and Airbnb Guide Style to lint the code. To run the linters, use the following commands:

  ``` powershell
  npm run lint
  npm run lint:fix
  ```

#### `npm run preview`

Preview project before build production.

- With localhost: `npm run preview`
  Run command below and open <http://127.0.0.1:8080/> to view it in the browser.
- With localhost and network: `npm run preview:host`

  ``` powershell
  ➜  Local:   http://localhost:8080/
  ➜  Network: http://YOUR_IP:8080/
  ```

#### `npm run build`

- Builds the app for production to the `dist` folder.

   ``` powershell
   npm run build
   ```

- The project can be deployed to a variety of platforms, such as Render, Firebase, Netlify, or Vercel.

---

## Folder Structure

<details>
<summary>The code for the project is organized as follows:</summary>

``` markdown
.
├── .vscode
├── node-modules
├── public
├── src/
│   ├── apis
│   ├── assets
│   ├── components/
│   │   ├── generic/
│   │   │   ├── Header
│   │   │   └── ...
│   │   └── layout/
│   │       ├── defaultLayout.tsx
│   │       └── index.tsx
│   ├── hooks
│   ├── pages/
│   │   └── PageNotPound
│   ├── routes/
│   │   └── index.tsx
│   ├── types
│   ├── utils/
│   │   ├── constants/
│   │   │   ├── dbPage.json
│   │   │   └── index.tsx
│   │   ├── functions/
│   │   │   └── fetchAPI.tsx
│   │   └── helpers/
│   │       └── icons.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .editorconfig
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

---

## Contributing

Contributions are welcome! Please open an issue or a pull request if you have any ideas for improvement.

---

## Author

👤 **Khang Nguyen**

- Website: ngkhang.onrender.com
- Github: [@ngkhang](https://github.com/ngkhang)
- LinkedIn: [@ngkhang0220](https://linkedin.com/in/ngkhang0220)

---

## Show your support

Give a ⭐️ if this project helped you!
