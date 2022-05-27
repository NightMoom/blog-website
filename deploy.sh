#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo $1
# 生成静态文件
npm run docs:build

git add .
git commit -m '$1'

git pull origin main
git push origin main