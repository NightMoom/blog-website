#!/usr/bin/env sh
set -e 


cd ./docs/.vuepress/dist/

cp -fr * ~/Desktop/publish-website/ 


cd ~/Desktop/publish-website/ 

git add .
git commit -m ':memo: update'

git pull origin website
git push origin website