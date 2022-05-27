#!/usr/bin/env sh
set -e 

yarn build:website

# website

cd ~/Desktop/publish-web/ 
git checkout -b website

cd ~/Desktop/vuepress-starter

cd ./docs/.vuepress/dist/
cp -fr * ~/Desktop/publish-web/ 

cd ~/Desktop/publish-web/ 
git add .
git commit -m ':memo: update'
git pull origin website
git push origin website