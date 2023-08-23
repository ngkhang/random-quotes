module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    "airbnb",
    "airbnb-typescript",
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 1,
    'react/display-name': 0,
    // 👇 In React > 17, no longer need to import react when writing JSX if no use
    'react/react-in-jsx-scope': 0,

    // 👉 Rules ESLint: https://eslint.org/docs/latest/rules/
    // and TypeScript-ESLint: https://typescript-eslint.io/rules/

    'no-console': 1,
    'no-lonely-if': 1,
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    'indent': ['warn', 2],
    // 'semi': [1, 'never'], // config with Airbnb
    'quotes': ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1,
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      // "imports": "never",
      // "exports": "never",
      // "functions": "never",
    }],
    "@typescript-eslint/comma-dangle": "off",
    'comma-spacing': 1,
    'arrow-spacing': 1,
    "import/extensions": 0, // 👈 https://github.com/airbnb/javascript#modules--import-extensions
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": true }
    ]
  },
}
