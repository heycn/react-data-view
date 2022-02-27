#!/usr/bin/env sh

yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@gitee.com:heycn/react-data-view.git &&
git push -f -u origin "master" &&
cd -