module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off', // next.jsではcomponentでreactのimportいらない
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    'no-restricted-syntax': ['error', 'TSEnumDeclaration'], // 禁止構文 enumの禁止
    'react/prop-types': 'off', // 型検査はtypescriptで対応しているため
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off', // メンバのアクセス修飾子(pubic, privateなど)を必須にする
    '@typescript-eslint/interface-name-prefix': 'off', //interfaceの名前に必ずIのprefixをつける
    '@typescript-eslint/explicit-function-return-type': 'off', // functionの返値の型指定を必須にする
    '@typescript-eslint/explicit-module-boundary-types': 'off', // functionの返値の型指定を必須にする
    '@typescript-eslint/prefer-interface': 'off', // interfaceではなくtypeを優先して使う
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-unused-expressions': 'off', // optional chaining対応
    '@typescript-eslint/consistent-type-assertions': [
      // <Type>のアサーションの代わりに as Type を使う
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
