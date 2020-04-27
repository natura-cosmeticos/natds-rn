#!/usr/bin/env node

const fs = require('fs');
const shell = require('shelljs');

const branch = shell.exec('git rev-parse --abbrev-ref HEAD').trim();
const commit = shell.exec('git rev-parse HEAD').trim();
const commitMsg = shell.exec('git show --no-patch --oneline HEAD').trim();
const commiter = shell.exec('git show -s --format="%ae"').trim();

// const commit = process.env.GIT_CLONE_COMMIT_HASH;
// const commitMsg = process.env.GIT_CLONE_COMMIT_MESSAGE_SUBJECT;
// const commiter = process.env.GIT_CLONE_COMMIT_COMMITER_NAME;
const commiterEmail = process.env.GIT_CLONE_COMMIT_COMMITER_EMAIL;
const installPage = process.env.BITRISE_PUBLIC_INSTALL_PAGE_URL;

const buildInfo = {
  branch,
  commit,
  commiter,
  commiterEmail,
  commitMsg,
  installPage,
};

try {
  const data = fs.writeFileSync('build/storybook/buildInfo.json', JSON.stringify(buildInfo));
} catch (err) {
  console.error(err);
}
