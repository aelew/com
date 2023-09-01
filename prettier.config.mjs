/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '', '^@/', '^[../]', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
  trailingComma: 'none',
  singleQuote: true
};

export default config;
