module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  extends: [
    'airbnb',
    "plugin:meteor/recommended",
  ],
  env: {
    browser: true,
    node: true,
    meteor: true,
    mongo: true,
    es6: true,
  },
  globals: {

  },
  rules: {

  },
  settings: {
    "import/resolver": "meteor"
  },
  plugins: ['meteor'],
};
