const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["eslint.config.js"]
  },

  js.configs.recommended,

  {
    files: ["server.js", "src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: "commonjs"
    }
  },

  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];