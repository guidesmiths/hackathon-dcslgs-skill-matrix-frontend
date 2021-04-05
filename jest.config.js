require('./test/env');

module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js'],
  testPathIgnorePatterns: ['<rootDir>/frontend/', '<rootDir>/config/', '<rootDir>/UI-e2e/'],
  collectCoverageFrom: [
    'api-gateway/**/*.js',
    '!test/**/*.*',
    '!UI-e2e/**/*.*',
    '!**/node_modules/**',
    '!**/_templates/**',
    '!*.config.js',
  ],
  coverageDirectory: './test-reports/coverage',
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  reporters: [
    'default',
    ['jest-junit',
      {
        outputDirectory: './test-reports',
      },
    ],
  ],
};
