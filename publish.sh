#!/bin/bash
set -e 

yarn docs:build

cp -rf ./docs/.vuepress/dist/* ~/Desktop/publish/

cd ~/Desktop/publish/

echo $*

git add .
git commit -m "$*"

git pull origin publish

git push origin publish