# Nomad React App

- [Nomadcoders(React App)](https://nomadcoders.co/react-fundamentals/lobby)

# 0 INTRODUCTION
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

# 1 SETUP
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
git remote add origin https://github.com/ChoSangmuk/nomad-react-app.git
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

# 2 JSX & PROPS
## 2.0 Creating your first React Component
- In react, everything is Component
- Component is a function and return HTML
- javaScript + HTML = JSX 
- How to make Component? touch Potato.js 
```js
import React from 'react'; // Declare the use of react

function Potato() { // Upper Case
  return <h3>I Love Potata!</h3>;
}

export default Potato; // default export Potato function
```
- How to using Component? in App.js
```js
import React from 'react';
import Potato from './Potato'; //import Potato Component

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Potato /> {/* Using Potato Component */}
    </div>
  );
}

export default App;
```

## 2.1 Reusable Components with JSX + Props
## 2.2 Dynamic Component Generation
## 2.3  map Recap
## 2.4 Protection with PropTypes

# 3 STATE
## 3.0 Class Components and State
## 3.1 All you need to know about State
## 3.2 Component Life Cycle
## 3.3 Planning the Movie Component

# 4 MAKING THE MOVIE APP
## 4.0 Fetching Movies from API
## 4.1 Rendering the Movies
## 4.2 Styling the Movies
## 4.3 Adding Genres
## 4.4 Styles Timelapse
## 4.5 Cutting the summary

# 5 CONCLUSIONS
## 5.0 Deploying to Github Pages
## 5.1 Are we done?

# 6 ROUTING BONUS
## 6.0 Getting Ready for the Router
## 6.1 Building the Router
## 6.2 Building the Navigation
## 6.3 Sharing Props Between Routes
## 6.4 Redirecting