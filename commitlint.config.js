module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0, 'never'],
    'subject-full-stop': [0, 'never', '.'],
    'type-empty': [0, 'never'],
    'type-enum': [
      0,
      'never',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'build',
        'vercel',
      ],
    ],
  },
}
