const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.js',
    '!<rootDir>/lib/**/*.test.js',
  ],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 70,
      lines: 75,
      statements: 75,
    },
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/test-setup.js',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  ...tsjPreset,
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: false,
    },
  },
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
