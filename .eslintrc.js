module.exports = {
  root: true,
  env: { node: true, browser: true, es6: true },
  extends: ["plugin:vue/essential", "@vue/standard"],
  plugins: ["vue"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    yoda: ["error", "always"],
    "vue/max-attributes-per-line": ["off"],
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      "ignorePackages",
      { js: "never", vue: "never" }
    ],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow alignment of import from statement, allow alignment of assignment in variables
    "no-multi-spaces": [
      "error",
      { exceptions: { VariableDeclarator: true, ImportDeclaration: true } }
    ]
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
        "vue/script-indent": ["error", 2, { baseIndent: 1 }]
      }
    }
  ]
};
