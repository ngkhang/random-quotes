module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  // 👇 Handle: 'JSX' is not defined.eslintno-undef
  globals: {
    JSX: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y'
  ],
  rules: {
    // react-...
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 0, // 👈 In React > 17, no longer need to import react when writing JSX if no use
    'react/jsx-one-expression-per-line': [1, { 'allow': 'single-child' }],
    // import/...
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 0,

    'no-console': 1,
    'no-lonely-if': 1,
    'no-unused-vars': 0, // 👈 default @typescript-eslint/no-unused-vars: 1
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-unexpected-multiline': 'warn',
    'no-shadow': 0,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    'indent': ['warn', 2],
    // 'semi': [1, 'never'], // Config with Airbnb
    'quotes': ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'keyword-spacing': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'arrow-spacing': 1,
    'arrow-body-style': 0,
    // Add new
    'quote-props': ['error', 'consistent'],
    'dot-notation': ["error", { "allowPattern": "^(_[a-z]+)+[a-z]+$" }],
    "jsx-a11y/click-events-have-key-events": "off",
  },
}
