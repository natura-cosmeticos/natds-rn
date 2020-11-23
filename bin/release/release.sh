#!/bin/bash

PRE_RELEASE_NAME=$(node ./bin/release/getPreReleaseName.js)

[[ -z "${BITRISE_GIT_BRANCH}" ]] && BRANCH_NAME=$(git branch --show-current) || BRANCH_NAME=$BITRISE_GIT_BRANCH

[[ $1 = "pre-release" ]] && PRE_RELEASE="--prerelease ${PRE_RELEASE_NAME} --skip.tag --skip.changelog" || PRE_RELEASE=""
[[ $PRE_RELEASE = "" ]] && TAG_NAME="latest" || TAG_NAME=$PRE_RELEASE_NAME

git log "$( git describe --tags --abbrev=0 )..HEAD"
git checkout $BITRISE_GIT_BRANCH
git log "$( git describe --tags --abbrev=0 )..HEAD"

if \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -i -E '^feat|fix|perf|refactor|revert$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -E '\!$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%b' | grep -q -E '^BREAKING CHANGE:' ; }
then
  yarn bump:version $PRE_RELEASE
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
  npm publish --tag $TAG_NAME

  if [ -z "${PRE_RELEASE}" ]
  then git push --follow-tags origin HEAD
  else git push origin HEAD
  fi

else
  echo "No applicable changes since the previous tag, skipping..."
fi
