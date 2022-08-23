module.export = {
    roots: ['<rootDir>/app/javascript'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/app/javascript/**/>(*.)test.{js, jsx}'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ["/config/"],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      '@testing-library/react/cleanup-after-each'
    ],
    testEnvironment: 'jest-environment-jsdom',
  }