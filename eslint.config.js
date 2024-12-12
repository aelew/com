import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'jsonc/comma-dangle': ['warn', 'never'],
    'style/comma-dangle': ['warn', 'never'],
    'style/semi': ['warn', 'always'],
    'node/prefer-global/process': 'off'
  }
});
