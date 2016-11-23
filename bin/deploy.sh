#!/usr/bin/env bash

set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
  echo "Not deploying pull requests."
  exit
fi

if [[ "master" != "$TRAVIS_BRANCH" ]]; then
  echo "Not on the 'master' branch."
  exit
fi

git clone -b release --quiet https://github.com/getbasis/basis.git release
cd release
ls | xargs rm -rf
ls -la
npm run gulp release
ls -la

git add -A
git commit -m "[ci skip] release branch update from travis $TRAVIS_COMMIT"
git push --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" release 2> /dev/null
git status
