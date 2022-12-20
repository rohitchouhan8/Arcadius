module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  }
};