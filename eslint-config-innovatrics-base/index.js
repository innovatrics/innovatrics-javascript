// FIXME duplicit eslint config
module.exports = {
  root: true,
  extends: "airbnb-base",
  parser: "babel-eslint",
  plugins: [
    "flowtype"
  ],
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
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }]
  }
};