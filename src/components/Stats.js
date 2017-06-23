import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {movie} from '../types/movie';
import genres from '../mocks/genres.json';
import {withRouter} from 'react-router-dom';

export class _Stats extends React.Component {
  moviesMoreThan8 = movies => {
    return movies.filter(movie => movie.vote_average >= 8);
  };

  numberOfMoviesPerCategory = movies => {
    return genres
      .map(c => [
        c.id,
        c.name,
        movies.filter(movie => movie.genre_ids.indexOf(c.id) >= 0)
      ])
      .map(c => {
        return {
          id: c[0],
          name: c[1],
          size: c[2].length
        };
      });
  };

  render() {
    const {movies} = this.props;
    const moviesStats = this.moviesMoreThan8(movies);
    const moviesPerCategory = this.numberOfMoviesPerCategory(movies);

    return (
      <div className="card movie-card">
        <br />
        <div>
          <p>Movies that are rated more than 8/10</p>
          <ul className="list-group">
            {moviesStats.map(movie =>
              <li className="list-group-item" key={movie.id}>
                {movie.title} - {movie.vote_average}/10
              </li>
            )}
          </ul>
        </div>
        <br />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Number of movies</th>
              </tr>
            </thead>
            <tbody>
              {moviesPerCategory.map(c =>
                <tr key={c.id}><td>{c.name}</td><td>{c.size}</td></tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

_Stats.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  history: PropTypes.object
};

const mapStateToProps = ({movies}) => ({
  movies
});

export const Stats = connect(mapStateToProps)(_Stats);
