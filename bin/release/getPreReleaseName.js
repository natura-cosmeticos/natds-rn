#!/usr/bin/env node

const read = require('@commitlint/read');

const init = async () => {
  const commits = await read({ from: 'HEAD~2' });
  const issueNumber = commits.find(issue => issue.match(/(DSY-\d+)/g));
  const preReleaseName = issueNumber.match(/(DSY-\d+)/g)[0] || 'alpha';

  return preReleaseName;
};

init().then(result => console.log(result));
