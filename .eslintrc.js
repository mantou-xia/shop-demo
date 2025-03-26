module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "standard",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2022,
    parser: "@babel/eslint-parser",
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "vue/multi-word-component-names": "off",
  }
};
