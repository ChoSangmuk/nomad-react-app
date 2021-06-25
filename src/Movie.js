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
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string,
  // if using class api_url 1 or 2
  // id: PropTypes.number.isRequired,
  // year: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // poster: PropTypes.string.isRequired,
}

export default Movie;