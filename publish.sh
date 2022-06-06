#!/bin/bash
set -e 

yarn build:docs

cp -rf ./docs/.vuepress/dist/* ~/Desktop/publish/

cd ~/Desktop/publish/

echo $*

git add .
git commit -m $*

git pull origin publish

git push origin publish