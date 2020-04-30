#!/usr/bin/env node

const shell = require('shelljs');

const npmToken = process.env.NPM_TOKEN;

if (!npmToken) {
  console.log('NPM_TOKEN not found.');
  process.exit(1);
}

const init = () => {
  shell.exec('npm run release');
  shell.exec('git push --follow-tags');
  shell.exec('echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc');
  shell.exec('npm publish');
};

init();
