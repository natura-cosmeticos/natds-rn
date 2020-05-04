const Configuration = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['DSY-'],
    },
  },
  rules: {
    'references-empty': [2, 'never'],
  },
};

module.exports = Configuration;
