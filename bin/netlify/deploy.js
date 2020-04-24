#!/usr/bin/env node

const shell = require('shelljs');
const NetlifyAPI = require('netlify');

const exitWithMsg = (msg, code = 0) => {
  console.log(msg);

  shell.exit(code);
};

const authToken = process.env.NETLIFY_AUTH_TOKEN;

if (!authToken) {
  exitWithMsg('env var NETLIFY_AUTH_TOKEN not found', 1);
}

const { version } = require('../../package.json');

const sitePrefix = 'natds-rn';
const siteDir = 'build/storybook';
const client = new NetlifyAPI(authToken);
const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD');

const findSiteByName = async (siteName) => {
  const sites = await client.listSites();

  return sites.find(site => site.name === siteName);
};

const deploy = async (site) => {
  const deployInfo = await client.deploy(site.site_id, siteDir);

  if (!deployInfo.deploy.url) {
    exitWithMsg('An error ocurred', 1);
  }

  exitWithMsg(`All done! You can view your site in ${deployInfo.deploy.url}`);
};

const publishPreRelease = async () => {
  const siteName = `${sitePrefix}-${currentBranch.trim().replace('/', '-')}`;
  const site = await findSiteByName(siteName);
  const currentSite = site || await client.createSite({
    body: { name: siteName },
  });

  deploy(currentSite);
};

const publishMasterRelease = async () => {
  const siteName = `${sitePrefix}-v${version}`;

  if (await findSiteByName(siteName)) {
    exitWithMsg('Invalid version number: this version was already published.', 1);
  }

  const site = await client.createSite({
    body: { name: siteName },
  });

  deploy(site);
};

const init = async () => {
  try {
    if (currentBranch !== 'master') {
      await publishPreRelease();
    } else {
      await publishMasterRelease();
    }
  } catch (error) {
    exitWithMsg(JSON.stringify(error, null, 2), 1);
  }
};

init();
