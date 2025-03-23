module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
