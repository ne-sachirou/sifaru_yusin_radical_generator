白色語語根ジェネレーター (sifarU yUsin ru dEku kekurIa)
==
https://ne-sachirou.github.io/sifaru_yusin_radical_generator/

Update react-boilerplate
--
```sh
git log --pretty=format:"%H" # コピー
git remote add boilerplate https://github.com/react-boilerplate/react-boilerplate.git
git fetch boilerplate
git checkout boilerplate/master
rm -rf node_modules
yarn
npm run setup
git remote add origin git@github.com:ne-sachirou/sifaru_yusin_radical_generator.git
git fetch origin
# git cherry-pick 〜

npm start
npm run build
git push -f -u origin master
```
