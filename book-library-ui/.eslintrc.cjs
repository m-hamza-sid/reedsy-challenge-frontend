module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json"
  ],
  env: {
    "vue/setup-compiler-macros": true,
    node: true
  },
  rules: {
    "vue/multi-word-component-names": "off"
  }
};
