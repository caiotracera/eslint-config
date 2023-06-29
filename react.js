/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unused-modules": [
      "error",
      {
        "ignoreExports": [
          "**/?(*.)+(spec|test|d|stories).[jt]s?(x)"
        ],
        "unusedExports": true
      }
    ],
    "import/order": [
      "error",
      {
        "alphabetize": {
          "caseInsensitive": true,
          "order": "asc"
        },
        "distinctGroup": true,
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "group": "builtin",
            "pattern": "react",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "react"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": [
          "img"
        ],
        "img": [
          "Image"
        ]
      }
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "printWidth": 80,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "all"
      }
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};