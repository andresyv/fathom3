module.exports = {
  env: { browser: false, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', './node_modules/ts-standard/eslintrc.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    'no-extra-boolean-cast': 'off'
  }
}
