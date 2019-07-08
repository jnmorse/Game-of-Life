module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: 'jnmorse',
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'react/prefer-read-only-props': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/no-unused-modules': 0,
    'import/exports-last': 0,
    'import/prefer-default-export': 0
  }
};
