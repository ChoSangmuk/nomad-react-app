import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, backposter, genres }) {
  return (
    <div className="movie">
      <Link to={{ pathname: `/movie/${id}`, state: { year, title, summary, poster, backposter, genres } }}>
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (<li key={index} className="genres__genre"> {genre} </li>))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)} ...</p>
        </div>
      </Link>
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
  backposter: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;