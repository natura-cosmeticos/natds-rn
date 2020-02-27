#!/bin/bash
set -e

git remote rm origin
# This remote is using a contributor account and an OAuth key from github
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin https://$GH_API_USER:$GH_TOKEN@github.com/natura-cosmeticos/natds-rn

git fetch

git checkout feature/android-build-deploy

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

# Gets the latest tag pushed to remote
LATEST_TAG=`git tag --sort=committerdate | tail -1`

# Creates next alpha tag
NEXT_TAG=`node $TRAVIS_BUILD_DIR/.travis/utils/build-alpha-version.js ${LATEST_TAG}`

echo "Going from tag '${LATEST_TAG}' to tag '${NEXT_TAG}'"

# If the tag already exists, it will not break
git tag $NEXT_TAG || true
git push origin --tags -q || true
