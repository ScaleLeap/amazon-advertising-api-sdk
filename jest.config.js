module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns : [
    '<rootDir>/node_modules/',
    '<rootDir>/lib/',
    '<rootDir>/examples/',
  ],
  setupFilesAfterEnv: ['@scaleleap/jest-polly', './test/polly.js'],
};
