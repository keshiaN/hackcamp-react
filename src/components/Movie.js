import React from 'react';
import PropTypes from 'prop-types';
import {PICTURES_CDN_URL} from '../constants/urls';

export const Movie = ({data, onMovieClicked}) => {
  return (
    <div onClick={() => onMovieClicked(data.id)} className="movie">
      <img
        alt={`${data.title}'s cover`}
        src={PICTURES_CDN_URL + data.poster_path}
      />
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired,
  onMovieClicked: PropTypes.func.isRequired
};
