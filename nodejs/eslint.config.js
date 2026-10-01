const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  // Node.js files
  {
    files: ["server.js", "src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: "commonjs"
    }
  },

  // Browser files
  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  // Jest test files
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];