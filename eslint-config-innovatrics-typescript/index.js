module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    // the way the typescript-plugin works is that it sometimes
    // has to override eslint-default rules.
    // for example, it needs to extend the `camelcase` rule
    // to handle things that are typescript-specific.
    // so what it does is it disables the `camelcase` rule,
    // and creates a `@typescript-eslint/camelcase` rule,
    // that does the same as the `camelcase` rule + some extra checks.
    // the problem happens, when the airbnb-rules configure
    // `camelcase` to something specific, and then
    // `@typescript-eslint/camelcase` says something else.
    // so we manually have to check which eslint-rules
    // does `typescript-eslint disable`, and find those
    // in airbnb, and copy them here under the `@typescript-eslint/*` rule

    // start of copied-from-airbnb-rules
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // end of copied-from-airbnb-rules

    // We've changed minProperties from airbnb's 4 to our 8.
    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        minProperties: 8,
        multiline: true,
        consistent: true
      }
    ],

    // Dusan hates this one
    'no-lonely-if': 'off',

    // we do not agree with airbnb on this
    // see this for a discussion: https://github.com/airbnb/javascript/issues/1135
    'import/prefer-default-export': 'off',

    // we need to override this one because when the object-keys
    // are numbers, then airbnb wants them unquoted, and flow
    // wants them quoted. and we cannot change it in flow.
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: true }
    ],

    // We have added Storybook .story files [Innovatrics]
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*.{test,spec}.{ts,tsx}', // tests where the extension denotes that it is a test
          '**/jest.config.js', // jest config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/*.story.{ts,tsx}' // Storybook story files - ADDED by Innovatrics
        ],
        optionalDependencies: false
      }
    ],

    // --------------------------------------------------------------------------
    // Rules under this line are extensions over 'eslint-config-innovatrics'

    // the following rule (jsx-a11y/label-has-for),
    // is deprecated in eslint-plugin-jsx-a11y,
    // and jsx-a11y/label-has-associated-control should be used instead.
    // the airbnb-ruleset still enforces it though,
    // so we disable the obsolete one completely.
    'jsx-a11y/label-has-for': 'off',

    // the airbnb-rules say that a label has to
    // BOTH have an htmlFor attribute, and have
    // the input-element as it's child.
    // we disagree here, for us it is enough
    // if one of the two happens.
    // please note, we have to override the rule-customization,
    // that airbnb did, so we explicitly set the empty-object
    // as the second param. just setting the value to 'error'
    // is not enough.
    'jsx-a11y/label-has-associated-control': ['error', {}],

    // airbnb-config is not ready for flow yet,
    // so we override the sort-order rule
    // so that flow-type-annotations can be first
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],

    // dusan hates this
    'react/destructuring-assignment': 'off',

    // We will not write propTypes anymore, as they will be discontinued at all by Facebook
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',

    'react/jsx-filename-extension': ['.tsx'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  }
};
