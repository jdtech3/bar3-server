module.exports = {
  'env': {
    'es2020': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': 'off',
    'camelcase': 'off', // Because of the P&W API
  },
};
