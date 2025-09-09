import pluginQuery from '@tanstack/eslint-plugin-query';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/webserver/**'],
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  ...pluginQuery.configs['flat/recommended'],
  {
    rules: {
      'prettier/prettier': 'off',
      'quotes': ['error', 'single'],
      'semi': [
        'error',
        'always'
      ],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];