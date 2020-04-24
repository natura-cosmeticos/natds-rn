#!/usr/bin/env node

const NetlifyAPI = require('netlify');
const { exitWithMsg, findSiteByName, buildBranchSiteName } = require('./helpers');

const authToken = process.env.NETLIFY_AUTH_TOKEN;
const pullRequestBranch = process.env.BITRISEIO_PULL_REQUEST_MERGE_BRANCH
  || process.env.BRANCH_NAME;

if (!authToken) exitWithMsg('env var NETLIFY_AUTH_TOKEN not found', 1);
if (!pullRequestBranch) exitWithMsg('env var BITRISEIO_PULL_REQUEST_MERGE_BRANCH or BRANCH_NAME not found', 1);

const init = async () => {
  const client = new NetlifyAPI(authToken);
  const siteName = buildBranchSiteName(pullRequestBranch);
  const site = await findSiteByName(client, siteName);

  if (!site) {
    exitWithMsg('Could not find site associated with this branch.');
  }

  try {
    await client.deleteSite({
      site_id: site.site_id,
    });
  } catch (error) {
    exitWithMsg(`Error deleting ${siteName}.
    ${JSON.stringify(error, null, 2)}`, 1);
  }

  exitWithMsg(`Site ${siteName} deleted!`);
};

init();
