#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

echo $1

# git add .
git add .

git status -s
git commit -m "$*"

git pull origin main
git push origin main
