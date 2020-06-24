#!/bin/bash

[[ $1 = "pre-release" ]] && PRE_RELEASE="--prerelease $(node ./bin/release/pre-release.js) --skip.tag --skip.changelog" || PRE_RELEASE=""

if \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -i -E '^feat|fix|perf|refactor|revert$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -E '\!$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%b' | grep -q -E '^BREAKING CHANGE:' ; }
then
  yarn bump:version $PRE_RELEASE
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
  npm publish
  git push --tags
  git push
else
  echo "No applicable changes since the previous tag, skipping..."
fi
