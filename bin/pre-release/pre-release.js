#!/usr/bin/env node

const read = require('@commitlint/read');
const shell = require('shelljs');

const init = async () => {
  const commits = await read({ from: 'HEAD~2' });
  const issueNumber = commits.find(issue => issue.match(/(DSY-\d+)/g));
  const preReleaseName = issueNumber.match(/(DSY-\d+)/g)[0] || 'alpha';

  shell.exec(`yarn release --prerelease ${preReleaseName}`);
};

init();
