module.exports = {
  "env": {
    "es6": true,
    "mocha": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "extends": [
    "@naturacosmeticos/eslint-config-natura",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "max-lines-per-function": 0,
    "max-lines": 0,
    "complexity": 0,
    "max-statements": 0,
    "max-len": 0,
    "func-names": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "lib"
        ]
      }
    },
    "react": {
      "version": require('./package.json').devDependencies.react,
    },
  }
};
