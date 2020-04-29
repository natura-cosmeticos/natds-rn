module.exports = {
  "env": {
    "es6": true,
    "mocha": true,
    "node": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
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
    "react",
    '@typescript-eslint'
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".jsx"
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "max-lines-per-function": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "hooks/**/*",
          "**/*.test.*",
          "**/*.stories.*",
          "**/*.device.*",
          "test-setup.js",
          "storybook/**/*",
          "storybook-web/**/*",
          "bin/**/*"
        ]
      }
    ],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
  "overrides": [
    {
      "files": ["*.tsx", "*.ts"],
      "rules": {
        "no-unused-vars": 0
      }
    },
    {
      "files": ["bin/**/*"],
      "rules": {
        "no-console": 0
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "typescript": {},
      "node": {
        "paths": [
          "lib"
        ],
        "extensions": ['.js', '.jsx', '.ts', '.tsx', '.json', '.mdx']
      }
    },
    "react": {
      "version": require('./package.json').devDependencies.react,
    },
  }
};
