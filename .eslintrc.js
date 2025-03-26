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
  },
  overrides: [
    {
      files: ['src/assets/font/iconfont.js'],
      rules: {
        'no-unused-expressions': 'off',
        'no-sequences': 'off',
        'no-use-before-define': 'off',
        'no-var': 'off',
        'no-self-assign': 'off',
        'eqeqeq': 'off',
        'no-void': 'off'
      }
    }
  ],
};
