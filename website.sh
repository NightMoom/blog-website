#!/usr/bin/env sh

# 确保脚本抛出遇到的错误

set -e

yarn build:website

cp -rf ./docs/.vuepress/dist/* ~/Desktop/website/


cd ~/Desktop/website/