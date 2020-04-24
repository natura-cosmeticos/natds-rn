#!/usr/bin/env node

const shell = require('shelljs');
const NetlifyAPI = require('netlify');
const {
  exitWithMsg, buildBranchSiteName, buildMasterSiteName, findSiteByName,
} = require('./helpers');

const authToken = process.env.NETLIFY_AUTH_TOKEN;

if (!authToken) {
  exitWithMsg('env var NETLIFY_AUTH_TOKEN not found', 1);
}

const { version } = require('../../package.json');

const siteDir = 'build/storybook';
const client = new NetlifyAPI(authToken);
const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD');

const deploy = async (site) => {
  const deployInfo = await client.deploy(site.site_id, siteDir);

  if (!deployInfo.deploy.url) {
    exitWithMsg('An error ocurred', 1);
  }

  exitWithMsg(`All done! You can view your site in ${deployInfo.deploy.url}`);
};

const publishRelease = async (siteName) => {
  const site = await findSiteByName(siteName);
  const currentSite = site || await client.createSite({
    body: { name: siteName },
  });

  deploy(currentSite);
};

const init = async () => {
  const siteName = currentBranch === 'master'
    ? buildMasterSiteName(version)
    : buildBranchSiteName(currentBranch);

  try {
    await publishRelease(siteName);
  } catch (error) {
    exitWithMsg(JSON.stringify(error, null, 2), 1);
  }
};

init();
