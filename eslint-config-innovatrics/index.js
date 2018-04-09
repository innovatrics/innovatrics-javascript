// FIXME duplicit eslint config
module.exports = {
  root: true,
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "flowtype"
  ],

  /* Every rule here MUST have an argument here. So add a comment with explanation to
     each rule here.
   */
  rules: {
    // this fixes the eslint-problem,
    // where eslint cannot find the
    // definitions of the types
    "flowtype/define-flow-type": 1,

    // Report missing or missed placed @flow annotations
    "flowtype/require-valid-file-annotation": [
      "error",
      "always"
    ],

    // enforce consistent flow type-names
    "flowtype/type-id-match": [
      "error",
      "^([A-Z][a-z0-9]*)+$"
    ],

    // We've changed line length from airbnb's 100 to our 120.
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // We've changed minProperties from airbnb's 4 to our 8.
    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 8, multiline: true, consistent: true }
    }],

    // Dusan hates this one
    "no-lonely-if": "off",

    // we do not agree with airbnb on this
    // see this for a discussion: https://github.com/airbnb/javascript/issues/1135
    "import/prefer-default-export": "off",

    // we need to override this one because when the object-keys
    // are numbers, then airbnb wants them unquoted, and flow
    // wants them quoted. and we cannot change it in flow.
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }],

    // We have added Storybook .story files [Innovatrics]
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
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
        '**/*.story.{js,jsx}', // Storybook story files - ADDED by Innovatrics
      ],
      optionalDependencies: false,
    }],


    // --------------------------------------------------------------------------
    // Rules under this line are extensions over 'eslint-config-innovatrics-base'


    // We have set `allowChildren` to true [Innovatrics]
    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': ['error', { components: ['label'], allowChildren: true }],

    // airbnb-config is not ready for flow yet,
    // so we override the sort-order rule
    // so that flow-type-annotations can be first
    "react/sort-comp": ["error", {
      order: [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],

    // we do not agree with airbnb on this
    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': "off",

    // We will not write propTypes anymore, as they will be discontinued at all by Facebook
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
  },
  // import electron from 'electron' errors because it's in devDependencies, this rule fixes it
  // see: https://github.com/benmosher/eslint-plugin-import/issues/422
  "settings": {
    "import/core-modules": ["electron"],
  },
};
