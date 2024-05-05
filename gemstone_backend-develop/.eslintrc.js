module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  globals: {
    CustomError: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': 'error',
    'no-var': 'error',
    'spaced-comment': ['error', 'always'],
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': 'warn',

    'no-unused-vars': 'off',
    'no-cond-assign': 'off',
    'no-constant-condition': 'off',
    'no-regex-spaces': 'off',
    'require-atomic-updates': 'off',
  },
};
