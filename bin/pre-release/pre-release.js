#!/usr/bin/env node

const read = require('@commitlint/read');
const shell = require('shelljs');

const npmToken = process.env.NPM_TOKEN;

if (!npmToken) {
  console.log('NPM_TOKEN not found.');
  process.exit(1);
}

const init = async () => {
  const commits = await read({ from: 'HEAD~4' });
  const issueNumber = commits.find(issue => issue.match(/(DSY-\d+)/g));
  const preReleaseName = issueNumber.match(/(DSY-\d+)/g)[0] || 'alpha';

  shell.exec(`npm run release -- --prerelease ${preReleaseName}`);
  // shell.exec('git push --follow-tags');
  shell.exec('echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc');
  shell.exec(`npm publish --tag ${preReleaseName}`);
};

init();
