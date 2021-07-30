module.exports = {
  env: {
    browser: true, // browser global variables.
    es2021: true, // adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
    jest: true, // Jest global variables.
    node: true, // Node.js global variables and Node.js scoping.
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // Uses rules from eslint-config-airbnb-typescript plugin
    'airbnb-typescript',

    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',

    // This ESLint plugin enforces the Rules of Hooks.
    // https://reactjs.org/docs/hooks-rules.html
    'plugin:react-hooks/recommended',

    // Static AST checker for accessibility rules on JSX elements.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',

    // Uses the all recommended rules from prettier plugin
    // https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/*'], // Ignore node_modules and .next generated files
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'prettier', 'react-hooks', 'react'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    /**
     * Prettier
     */
    // Show prettier errors in eslint
    'prettier/prettier': ['error'],

    /**
     * Typescript
     */

    // Allow @ts-<directive> comments for development
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Allow unused variables for development purposes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Typescript is good in inferring return types, so there is no need to specify
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Typescript is good in inferring return types, so there is no need to specify
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Allow shadowing, since "const" and "let" are block scoped
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.26.1/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': ['off'],

    // Use consistent type definitions, prefer "type" over "interface"
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Enforces naming conventions for everything across the codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      // Enforce casing for variables
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // Enforce prefix for boolean variables
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      // Use camelCase for functions
      // Use PascalCase for React components
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // class, interface, typeAlias, enum, typeParameter
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    /**
     * Base
     */

    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Warn about warning comments, e.g: todo, fixme
    // https://eslint.org/docs/2.0.0/rules/no-warning-comments
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ],

    // Allow console.log only in development as warning for debugging purposes
    // Allow warning and error logs also in production
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['error', 'warn'],
      },
    ],

    // Allow debugger with warning for development
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    // Enforce blank lines:
    // Before every return, case, default and try
    // After every const, let and var but not between each other
    // After every multiline block statement
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
      // Always require blank lines after block statement
      {
        blankLine: 'always',
        prev: [
          'multiline-block-like',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'multiline-var',
        ],
        next: '*',
      },
    ],

    /**
     * React
     */

    // Since React 17 you don't need to import React in your components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',

    // We don't use propTypes we use typed props instead with Typescript
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // Prevent missing displayName in a React component definition, e.g. with forwardRef, etc.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Components without children can be self-closed to avoid unnecessary extra closing tag.
    // https://github.com/yannickcr/eslint-plugin-react/blob/97a9f397d2a8a3ce3b2af893bdbb86bb2c1d4480/docs/rules/self-closing-comp.md
    'react/self-closing-comp': ['error', { component: true }],

    // This formatting rule is handled by Prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 'off',

    // This formatting rule is handled by Prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 'off',

    // This formatting rule is handled by Prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',

    // Not needed with Typescript
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    /**
     * Import
     */

    // Allow using named exports as single export, preferred way of exports
    'import/prefer-default-export': 'off',

    // Do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Allow any order of import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': ['error', { groups: ['builtin', 'external'] }],

    // Ensures that there is no resolvable path back to this module via its dependencies.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['warn'],
  },
};
