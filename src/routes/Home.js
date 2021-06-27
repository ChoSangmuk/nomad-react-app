import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

// if your api_url have auth_key, also you can separate auth_key like below
// if you want your auth_key, recommend to hide auth_key
// const auth_key = 'f5eef3421c602c6cb7ea224104795888'; // it is sample auth_key at kofic. 
// const today = '20210624';
// const api_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${auth_key}&targetDt=${today}`;
// const api_url = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'; // class api_url 1
const api_url = 'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'; // class api_url 2

class Home extends React.Component {
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
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
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
                genres={movie.genres}
              />
            ))}
          </div>
        )
        }
      </section>
    )
  }
}

export default Home;