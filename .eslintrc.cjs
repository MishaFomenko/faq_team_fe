module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', "simple-import-sort", 'import'], 
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off',
    'prettier/prettier': 'warn', 
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ["^node:"],
          ["^react", "^@?\\w"],
          ["^\\u0000"],
          ["^(components|assets|const|styles|translation|fonts|helpers|pages)(/.*|$)"],
          ["^.+\\.s?css$"]
        ],
      },
    ],    
    'simple-import-sort/exports': 'warn',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
  },
}
