module.exports = {
  env: {
    node: true,
  },
  extends: ['../../.eslintrc.js'],

  ignorePatterns: ['lib/**/*', 'examples/**/*', 'jest.co'],
  rules: {
    '@sentry-internal/sdk/no-class-field-initializers': 'off',
  },
};
