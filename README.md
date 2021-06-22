# Nomad React App

- [Nomadcoders(React App)](https://nomadcoders.co/react-fundamentals/lobby)

# 0 INTRODUCTION
## 0.1 Requirements
```sh
# node js
node -v
# npm 
npm -v
# npx
npm install npx -g
npx -v
# git 
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
- Components return closed HTML Tag
- Components can send data to (child) components using Props(full name.Property)
- Declaration of use of props similar with HTML attribute 
- To use props in child components, use {}
```js
import React from 'react';

function Food(props) {
  console.log(props);
  return (
    <h2>I Love {props.favorite}!</h2>
  );
}
// or 
function Food({ favorite }) {
  return (
    <h2>I Love {favorite}!</h2>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food favorite="kimchi" /> {/* Using Potato Component */}
    </div>
  );
}

export default App;
```

## 2.2 Dynamic Component Generation
- Using JavaScript Array function - [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/maps)
```js
function Food({ name, image }) {
  return (
    <div>
      <h2>I Love {name}!</h2>
      <img src={image}></img>
    </div>
  );
}

const foodList = ["Something..."];

function App() {
  return (
    <div className="App">
      {/* Using Map */}
      {foodList.map(value => <Food name={value.name} image={value.image} />)}
    </div>
  );
}
```

## 2.3  map Recap
- another way using map 
```js
function App() {
  return (
    <div className="App">
      {/* Using Map */}
      {foodList.map(value => <Food name={value.name} image={value.image} />)}
    </div>
  );
}
// or
function renderFood(value) {
  return <Food name={value.name} image={value.image} />;
}
function App() {
  return (
    <div className="App">
      {/* Using Map */}
      {foodList.map(renderFood)}
    </div>
  );
}
```
- to solve Warning: Each child in a list should have a unique "key" prop. -> make props "key"
```js
foodList.map(value => <Food key={value.id} name={value.name} image={value.image} />)
```

## 2.4 Protection with PropTypes
- check props from parents component
- npm install prop-types // shell
- [PropTypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
```js
import PropTypes from 'prop-types';

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
```

# 3 STATE
## 3.0 Class Components and State
- react automatically run render method in class component
- why using Class component? state 
- state is Object, and save changeable Data
```js
class App extends React.Component {
  state = {
    count: 0,
  }

  add = () => {
    console.log("add");
  }

  minus = () => {
    console.log("minus");
  }

  render() {
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add} >add</button> {/* not this.add(), it is immediately run */}
      <button onClick={this.minus} >minus</button>
    </div>;
  }
}
```

## 3.1 All you need to know about State
- how can you change state? ->  Do not mutate state directly. Use setState().
- if modify state directly, react dosen't refresh render function.
- that mean's react want to refresh when state changed -> notify using setState().
```js
  add = () => {
    this.setState(keyword => ({ count: keyword.count+1, }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count-1, }));
  }
```
- About implicit return
- About Arrow function
```
Arrow function bind 'this' automatically. But normal type function can't bind 'this' automatically.
```

## 3.2 Component Life Cycle
- component have life cycle, and dealt with by method
- [react component](https://ko.reactjs.org/docs/react-component.html)
- [react lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
```js
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount"); 
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
```

## 3.3 Planning the Movie Component
- state not a required
```js
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
```

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