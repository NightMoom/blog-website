#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo $1
# 生成静态文件
npm run docs:build

# git add .
git add .

git status -s
git commit -m $1

git pull origin main
git push origin main


cd ~/Desktop/publish-web/ 

echo "change branck"
git checkout -b publish

cd ~/Desktop/vuepress-starter
cd ./docs/.vuepress/dist
cp -fr * ~/Desktop/publish-web/ 

cd ~/Desktop/publish-web/ 

git add .
git commit -m 'publish'

git pull origin publish
git push origin publish