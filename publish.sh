#!/usr/bin/env sh
set -e 

yarn build:website

cd ./docs/.vuepress/dist/

cp -fr * ~/Desktop/publish-website/ 


cd ~/Desktop/publish-website/ 

ls

git status
git add .
git commit -m ':memo: update'
git pull origin website
git push origin website