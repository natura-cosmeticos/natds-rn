const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/src/**/**/*.+(ts|tsx|js)',
    '!<rootDir>/src/**/**/*.test.+(ts|tsx|js)',
    '!<rootDir>/src/**/**/*.device.+(ts|tsx|js)',
    '!<rootDir>/src/**/**/*.stories.+(ts|tsx|js)',
    '!<rootDir>/src/**/**/*.data.+(ts|tsx|js)',
    '!<rootDir>/src/growthPlanColors/**/*.+(ts|tsx|js)',
  ],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 70,
      lines: 75,
      statements: 75,
    },
  },
  preset: 'react-native',
  moduleDirectories: [
    'node_modules',
    'test',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '/\.svg/': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/testSetup.ts',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/lib/',
    '<rootDir>/storybook/',
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
