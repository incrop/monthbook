#!/bin/bash
# usage: ./prepare-release.sh 0.4
set -x # echo on
set -e # stop on first error

# run this commands after:
# git push --tags origin master
# git push origin gh-pages


git checkout master
git tag -a v$1 -m "version $1"
grunt dev
mv target dev
grunt prod
mv target prod
git add dev prod
git stash
git checkout gh-pages
git stash pop
rm -rf target-*
mv dev target-dev
mv prod target-prod
git add .
git commit -m "release version $1"
git checkout master
