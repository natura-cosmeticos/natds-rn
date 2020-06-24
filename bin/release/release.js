#!/usr/bin/env node

const shell = require('shelljs');

const npmToken = process.env.NPM_TOKEN;

if (!npmToken) {
  console.log('NPM_TOKEN not found.');
  process.exit(1);
}

const shouldRelease = () => {
  const hasBumpableCommits = shell.exec(`git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -i -E '^feat|fix|perf|refactor|revert$'`);
  const hasExclamationBreakingChange = shell.exec(`git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -E '\!$'`);
  const hasBreakingChange = shell.exec(`git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%b' | grep -q -E '^BREAKING CHANGE:'`);

  console.log({ hasBumpableCommits })
  console.log({ hasExclamationBreakingChange })
  console.log({ hasBreakingChange })

  return hasBumpableCommits || hasExclamationBreakingChange || hasBreakingChange;
};

const init = () => {
  if (!shouldRelease()) {
    console.log('No release is necessary based on commits. Skipping...');
    shell.exit(0);
  }

  shell.exec('yarn bump:version');
  shell.exec('echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc');
  shell.exec('npm publish');
  shell.exec('git push --tags');
  shell.exec('git push');
};

init();
