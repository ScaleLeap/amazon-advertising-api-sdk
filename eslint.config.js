const tsEsLintPlugin = require('@typescript-eslint/eslint-plugin')
const jest = require('eslint-plugin-jest')
const prettier = require('eslint-plugin-prettier')
const eslint = require('@eslint/js')
const tsEsLint = require('typescript-eslint')
const parser = require('@typescript-eslint/parser')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
  eslint.configs.recommended,
  tsEsLint.configs.eslintRecommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        node: true,
        jest: true,
        es6: true,
      }
    },
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      tsEsLintPlusin: tsEsLintPlugin,
      jest: jest,
      prettier: prettier,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['off'],
      'camelcase': ['warn', { 'properties': 'always' }],
      'no-console': [1, { allow: ['warn', 'error'] }],
      'curly': 'error'
    }
  }
]