module.exports = {
  // Indicates the root directory of your project
  rootDir: '.',

  // A list of file extensions Jest will look for
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // The directories Jest will use to look for files
  roots: ['<rootDir>/src'],

  // A list of file paths to ignore during testing
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Setup files to run before each test
  setupFiles: ['<rootDir>/src/setupTests.ts'], // <-- Updated to .ts

  // Jest transform configuration for handling different file types
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest', // <-- Updated to ts-jest
  },

  // Additional Jest configuration options can be added here

  // Coverage reporting options
  coverageReporters: ['text', 'lcov'], // Output coverage report in text format and lcov format

  // List of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['lcov'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // <-- Updated to .ts

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/',
    '/src/index.tsx',
  ],

  // If true, Jest will use a fake timer for functions such as setTimeout
  timers: 'fake',

  // Collect coverage information while running tests
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.{js,jsx,ts,tsx}',
    '!src/setupTests.{js,jsx,ts,tsx}',
    '!src/reportWebVitals.{js,jsx,ts,tsx}',
  ],
 jest: {
      "testEnvironment": "jsdom"
    },
testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  
};
