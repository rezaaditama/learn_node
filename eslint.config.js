import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginNode from 'eslint-plugin-node';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginStandard from 'eslint-plugin-standard';

export default [
  {
    files: ['**/*.{ts,tsx,js}'],
    ignores: ['**/build/*', '**/node_modules/*', '**/public/*', '**/tsconfig.json', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        NodeJS: true
      },
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: eslintPluginImport,
      node: eslintPluginNode,
      promise: eslintPluginPromise,
      standard: eslintPluginStandard
    },
    rules: {}
  }
];
