module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns : [
    '<rootDir>/node_modules/',
    '<rootDir>/lib/'
  ],
  setupFilesAfterEnv: ['@scaleleap/jest-polly', './test/polly.js'],
};
