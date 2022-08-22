#package.json => "scripts"#

```
"scripts": {
"start": "npm-run-all --parallel start:**",
"start:clinet": "react-scripts start",
"start:server": "nodemon ./server/server.js",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
```

서버 폴더 생성,
setUpProxy.js 생성

```
npm i npm-run-all
npm i cors
npm i mysql
npm i compression
npm i nodemon
```
