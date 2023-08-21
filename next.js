const reactConfig = require('./react');

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ...reactConfig,
  rules: {
    ...reactConfig.rules,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "all",
        plugins: ['prettier-plugin-tailwindcss']
      },
    ]
  }
}

module.exports = config;