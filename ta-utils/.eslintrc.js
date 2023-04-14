module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  'parser': '@typescript-eslint/parser',  //ESLint的解析器换成 @typescript-eslint/parser 用于解析ts文件

  extends: [
    "plugin:vue/base",
    "@vue/standard",
    "@vue/typescript/recommended",
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    "ecmaVersion": 2020,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      },
    }
  ],
}
