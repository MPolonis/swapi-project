module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2020': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'prettier'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    "max-len": [
      "error",
      {
        "comments": 140,
        "code": 140,
        "tabWidth": 4,
        "ignoreUrls": true,
        "ignoreComments": true
      }
    ],
    "react/prop-types": 0,
    "eol-last": [
      "error",
      "always"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-trailing-spaces": [
      "error",
      {
        "ignoreComments": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": false
      }
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1,
        "maxEOF": 0
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_"
      }
    ],
    "no-var": 2,
    "no-console": 0,
    "no-use-before-define": "error",
    "no-case-declarations": 0,
    "react-hooks/rules-of-hooks": "error",
    // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 0
  }
}
