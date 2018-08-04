module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: 'src',
  setupFiles: [],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/**/**.test.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
};
