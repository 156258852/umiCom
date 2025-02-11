module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  plugins: ['my-eslint-plugin'],
  rules: {
    'my-eslint-plugin/track-object-properties': 'error',
  },
}
