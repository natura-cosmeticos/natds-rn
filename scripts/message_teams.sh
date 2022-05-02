#!/bin/bash

# create new message teams template file
cp ./scripts/message_teams.json ./scripts/updated_message_teams.json

# get last version at package
LAST_VERSION=$(cat ./scripts/updated_package_version.json \
  | grep last_version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[", ]//g')

# get and update version at message
NEW_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[", ]//g')

if [ "$NEW_VERSION" != "$LAST_VERSION" ]; then
  echo 'New version found!  updating message...'

  # create a version template file
  cp ./scripts/package_version.json ./scripts/updated_package_version.json

  # update the last version
  sed -i '' "s/LASTVERSIONVALUE/$NEW_VERSION/g" ./scripts/updated_package_version.json
  # update the new version in teams message
  sed -i '' "s/VERSIONVALUE/$NEW_VERSION/g" ./scripts/updated_message_teams.json

  releaselinecontent='https://github.com/natura-cosmeticos/natds-rn/compare/'
  major=`echo $NEW_VERSION | cut -d. -f1`
  minor=`echo $NEW_VERSION | cut -d. -f2`
  patch=`echo $NEW_VERSION | cut -d. -f3`
  rgxversion="$major\.$minor\.$patch" # regex for new version

  # save last version output to file
  awk 's{print $0 > "./scripts/message_release.txt"}; $0~v {print $0 > "./scripts/message_release.txt"; s=1; next}; (!($0~v) && $0~l) {s=0};' RS= v=$rgxversion l=$releaselinecontent CHANGELOG.md
  # erase last line of file
  sed -i '' -e '$ d' ./scripts/message_release.txt

  # write release message with line breaks
  awk '{printf "%s\\\n ",$0 > "./scripts/message_text.txt"} END {print ""}' ./scripts/message_release.txt

  # update release message at json
  CHANGELOG_UPDATES=`cat ./scripts/message_text.txt`
  sed -i '' "s|CHANGELOGMESSAGE|$CHANGELOG_UPDATES|g" ./scripts/updated_message_teams.json

  # send message
  message=`cat ./scripts/updated_message_teams.json`
  curl -H 'Content-Type: application/json' -d "$message" "$TEAMS_RELEASE_WEBHOOK"

  # remove helper files
  rm ./scripts/updated_message_teams.json
  rm ./scripts/message_release.txt
  rm ./scripts/message_text.txt

fi
