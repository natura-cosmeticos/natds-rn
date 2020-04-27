#!/usr/bin/env node

const fs = require('fs');
// const shell = require('shelljs');

// const branch = shell.exec('git rev-parse --abbrev-ref HEAD').trim();
// const commit = shell.exec('git rev-parse HEAD').trim();
// const commitMsg = shell.exec('git show --no-patch --oneline HEAD').trim();
// const commiter = shell.exec('git show -s --format="%ae"').trim();

console.log('=====> Variables:', process.env);

const buildNumber = process.env.BITRISE_BUILD_NUMBER;
const branch = process.env.BITRISE_GIT_BRANCH;
const commit = process.env.GIT_CLONE_COMMIT_HASH;
const commitMsg = process.env.GIT_CLONE_COMMIT_MESSAGE_SUBJECT;
const commiter = process.env.GIT_CLONE_COMMIT_COMMITER_NAME;
const commiterEmail = process.env.GIT_CLONE_COMMIT_COMMITER_EMAIL;
const installPage = process.env.BITRISE_PUBLIC_INSTALL_PAGE_URL;
const pullRequestBranch = process.env.BITRISEIO_PULL_REQUEST_MERGE_BRANCH;

const buildInfo = {
  branch,
  buildNumber,
  commit,
  commiter,
  commiterEmail,
  commitMsg,
  installPage,
  pullRequestBranch,
};

const filePath = process.argv[2] || process.env.BUILD_INFO_PATH || 'storybook-web/static';

try {
  fs.writeFileSync(`${filePath}/buildInfo.json`, JSON.stringify(buildInfo));
} catch (err) {
  console.error(err);
  process.exit(1);
}
