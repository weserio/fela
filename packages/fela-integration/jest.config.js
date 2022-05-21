module.exports = {
  verbose: true,
  testRegex: 'test\\.js$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/lib/', '/es/'],
  watchPathIgnorePatterns: ['node_modules'],
}
