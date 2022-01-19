module.exports = {
  "env": {
    "es6": true,
    "mocha": true,
    "node": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    '@naturacosmeticos/eslint-config-natds/base',
    '@naturacosmeticos/eslint-config-natds/jest',
    '@naturacosmeticos/eslint-config-natds/react',
    '@naturacosmeticos/eslint-config-natds/typescript',
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
  "overrides": [
    {
      "files": ["*.test.tsx", "*.test.ts"],
      "rules": {
        "max-lines": 0,
        "max-lines-per-function": 0
      }
    },
    {
      "files": ["*.tsx", "*.ts"],
      "rules": {
        "react/jsx-props-no-spreading": 0,
        "import/no-cycle": 0,
        "import/prefer-default-export": 0,
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
              "bin/**/*",
              "lib/**/*",
              "test/**/*"
            ]
          }
        ],
        "@typescript-eslint/explicit-function-return-type": 0,
      }
    },
    {
      "files": ["bin/**/*"],
      "rules": {
        "no-console": 0,
      }
    },
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
