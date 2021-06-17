# Nomad React App

- [Nomadcoders(React App)](https://nomadcoders.co/react-fundamentals/lobby)

## 0.1 Requirements
- node js
```sh
node -v
```
- npm 
```sh
npm -v
```
- npx
```sh
npm install npx -g
npx -v
```
- git 
```sh
git --version
```

## 1.0 Creating your first React App
```sh
npx create-react-app nomad-react-app
```

## 1.1 Creating a Github Repository
```sh
cd nomad-react-app
git init 
# github repo make 
# https://github.com/ChoSangmuk/nomad-react-app.git
git remote add https://github.com/ChoSangmuk/nomad-react-app.git
git add .
git commit -m "1.1 Creating a Github Repository"
git push origin master
```

## 1.2 How does React work? 
- in public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <!-- something -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
- in src/index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // public/index.html's < div id="root" >< /div > will be changed to < App / > by react.
);
```
- And, Delete everything except App.js and index.js in "nomad-react-app/src"