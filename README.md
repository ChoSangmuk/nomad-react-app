# Nomad React App

- [Nomadcoders(React App)](https://nomadcoders.co/react-fundamentals/lobby)

# 0 INTRODUCTION
## 0.1 Requirements
```sh
# Shell
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
# Shell
npx create-react-app nomad-react-app
```

## 1.1 Creating a Github Repository
```sh
# Shell
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
// App.js
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
- Using JavaScript Array function - [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
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
    //this.setState({count: this.state.count + 1 });
    this.setState(keyword => ({ count: keyword.count + 1, }));
  }

  minus = () => {
    //this.setState({count: this.state.count - 1 });
    this.setState(keyword => ({ count: keyword.count - 1, }));
  }
```
- [reference](https://usecode.pw/functional-set-state-is-the-future-of-react/)
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
- state not a required!
```js
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    //return <div>{this.stat.isLoading ? "Loading..." : "We are ready"}</div>;
  }
```

# 4 MAKING THE MOVIE APP
## 4.0 Fetching Movies from API
- fetch : fetch data in javaScript 
```js
fetch() // like that ... but we use Axios
```
- [Axios](https://github.com/axios/axios) : like little layer on fetch 
```sh
# Shell
npm i axios
```
- concept of [await, async](https://joshua1988.github.io/web-development/javascript/js-async-await/)
- API-URL in class 
  - https://yts-proxy.now.sh/list_movies.json
  - https://yts-proxy.nomadcoders1.now.sh/list_movies.json
- if you want(or have problem) to using another API-URL
  - kofic sample: http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
  - ...
- but you use another API-URL, you must consider data frame(prop-types ...)
```js
import React from 'react';
import axios from 'axios';

// if your api_url have auth_key, also you can separate auth_key like below
// if you want your auth_key, recommend to hide auth_key
// const auth_key = 'f5eef3421c602c6cb7ea224104795888'; // it is sample auth_key at kofic. 
// const today = '20210624';
// const api_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${auth_key}&targetDt=${today}`;
// const api_url = 'https://yts-proxy.now.sh/list_movies.json'; // class api_url 1
const api_url = 'https://yts-proxy.nomadcoders1.now.sh/list_movies.json'; // class api_url 2

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { // getMovies is async function
    // axios need time... so we wait until axios finished
    const movies = await axios.get(api_url);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    // return <div>{this.stat.isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
```

## 4.1 Rendering the Movies
- match state with data(API)
- change isLoading to true
- rendering to new component Movie.js
```js
// App.js
import React from 'react';
import axios from 'axios';
import Movie from './Movie';

// if your api_url have auth_key, also you can separate auth_key like below
// if you want your auth_key, recommend to hide auth_key
// const auth_key = 'f5eef3421c602c6cb7ea224104795888'; // it is sample auth_key at kofic. 
// const today = '20210624';
// const api_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${auth_key}&targetDt=${today}`;
// const api_url = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'; // class api_url 1
const api_url = 'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'; // class api_url 2

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { // getMovies is async function
    // axios need time... so we wait until axios finished
    // const { data: { boxOfficeResult: { dailyBoxOfficeList } } } = await axios.get(api_url);
    // match state with data(API), and change isLoading to true
    // this.setState({ movies: dailyBoxOfficeList, isLoading: false });
    // if using class api_url 1 or 2
    const { data: { data: { movies } } } = await axios.get(api_url);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? <h1>Loading...</h1> : movies.map(movie =>
          // <Movie key={movie.movieCd} id={movie.movieCd} year={movie.openDt} title={movie.movieNm} summary={movie.genreAlt} poster={movie.poster} />
          // if using class api_url 1 or 2
          <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        )}
      </div>
    );
  }
}

export default App;

// Movie.js
import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="Movie">
      <h4>{title}</h4>
    </div>
  );
}

Movie.propTypes = {
  // id: PropTypes.string.isRequired,
  // year: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // summary: PropTypes.string,
  // poster: PropTypes.string,
  // if using class api_url 1 or 2
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movie;
```

## 4.2 Styling the Movies
- separate html tag for style
- make App.css, Movie.css
```js
// App.js
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

// ...

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
            ))}
          </div>
        )
        }
      </section>
    )
  }
}

export default App;

// Movie.js
import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
// ...
```

## 4.3 Adding Genres
- add Genres props
```js
// App.js
<div className="movies">
  {movies.map(movie => (
    // <Movie key={movie.movieCd} id={movie.movieCd} year={movie.openDt} title={movie.movieNm} summary={movie.genreAlt} poster={movie.poster} />
    // if using class api_url 1 or 2
    <Movie
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      genres={movie.genres} // genres
    />
  ))}
</div>

// Movie.js
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (<li key={index} className="genres__genre"> {genre} </li>))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  // ...
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
```
- about Warning : it can be confuse class component - html class, so use className in jsx
```
Warning: Invalid DOM property `class`. Did you mean `className`?
```
- similarly for -> htmlFor

## 4.4 Styles Timelapse
- just copy css at [github](https://github.com/nomadcoders/movie_app_2019/commit/c0a3270f5824c2555e2621190c6307cbaefe0704) ... 

## 4.5 Cutting the summary
- some case summary is too long.
```js
// Movie.js
// <p className="movie__summary">{summary}</p> -> 
<p className="movie__summary">{summary.slice(0, 180)} ...</p>
```

# 5 CONCLUSIONS
## 5.0 Deploying to Github Pages
- install Github Pages package
- Github pages usually using https://"Username".github.io/"projectName" 
```sh
# Shell
npm i gh-pages 

# Check Username, projectName
git remote -v
# origin  https://github.com/ChoSangmuk/nomad-react-app (fetch)
# origin  https://github.com/ChoSangmuk/nomad-react-app (push)
```
- add homepage to package.json (is required) and modify scripts
```json
// package.json
// homepage
"homepage": "https://ChoSangmuk.github.io/nomad-react-app"

// scripts
"scripts": {
  // ...
  "eject": "react-scripts eject",
  "predeploy":"npm run build",
  "deploy":"gh-pages -d build"
},
```
- let's deploy
```sh
# Shell
npm run deploy
```

## 5.1 Are we done?

# 6 ROUTING BONUS
## 6.0 Getting Ready for the Router
## 6.1 Building the Router
## 6.2 Building the Navigation
## 6.3 Sharing Props Between Routes
## 6.4 Redirecting