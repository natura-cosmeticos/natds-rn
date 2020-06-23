#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const buildNumber = process.env.BITRISE_BUILD_NUMBER;
const iOsBuildNumber = parseInt(buildNumber, 0) + 1;
const branch = process.env.BITRISE_GIT_BRANCH;
const commit = process.env.GIT_CLONE_COMMIT_HASH;
const commitMsg = process.env.GIT_CLONE_COMMIT_MESSAGE_SUBJECT;
const commiter = process.env.GIT_CLONE_COMMIT_COMMITER_NAME;
const commiterEmail = process.env.GIT_CLONE_COMMIT_COMMITER_EMAIL;
const installPage = process.env.BITRISE_PUBLIC_INSTALL_PAGE_URL;
const pullRequestBranch = process.env.BITRISEIO_PULL_REQUEST_MERGE_BRANCH;

const buildInfo = {
  branch,
  commit,
  commiter,
  commiterEmail,
  commitMsg,
  installPage,
  iOsBuildNumber,
  pullRequestBranch,
};

const definedInfo = [];

Object
  .keys(buildInfo)
  .forEach(item => buildInfo[item] && definedInfo.push({ name: item, value: buildInfo[item] }));

const template = `
# Version Information

{{#each item}}
{{name}}: \`{{value}}\`

{{/each}}
`;

const compile = Handlebars.compile(template);
const output = compile({ item: definedInfo });

const filePath = process.argv[2] || process.env.BUILD_INFO_PATH || 'docs';

try {
  fs.writeFileSync(`${filePath}/Version.md`, output);
  process.exit();
} catch (err) {
  console.error(err);
  process.exit(1);
}
