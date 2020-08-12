const shell = require('shelljs');

const sitePrefix = 'natds-rn';

const exitWithMsg = (msg, code = 0) => {
  console.log(msg);

  shell.exit(code);
};

const buildBranchSiteName = branchName => `${sitePrefix}-${branchName.toLowerCase().trim().replace('/', '-')}`;
const buildMasterSiteName = version => `${sitePrefix}-v${version.replace(/\./g, '-')}`;

const findSiteByName = async (client, siteName) => {
  const sites = await client.listSites();

  return sites.find(site => site.name === siteName);
};

module.exports = {
  buildBranchSiteName,
  buildMasterSiteName,
  exitWithMsg,
  findSiteByName,
  sitePrefix,
};
