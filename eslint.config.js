import configPrettier from 'eslint-config-prettier';
import pluginAstro from 'eslint-plugin-astro';

/** @type {import('eslint').Linter.FlatConfig} */
const config = [configPrettier, ...pluginAstro.configs['flat/jsx-a11y-strict']];

export default config;
