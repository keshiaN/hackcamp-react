import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {BACKDROP_URL_780} from '../constants/urls';
import {MovieComments} from './MovieComments';
import {SERVER_URL} from '../constants/config';

export class MovieDetail extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    this.fetchMovieDetails(this.props.movieId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId !== this.props.movieId) {
      this.fetchMovieDetails(nextProps.movieId);
    }
  }

  async fetchMovieDetails(id) {
    const {data: movie} = await axios.get(`${SERVER_URL}/movies/${id}`);
    this.setState({movie});
  }

  render() {
    const {movie} = this.state;
    if (!movie) {
      return <h1>Loading ...</h1>;
    }
    const {title, backdrop_path, overview, release_date, vote_average} = movie;
    return (
      <div>
        <div className="card mb-3 movie-card">
          <img
            alt="Movie Cover"
            className="card-imt-top"
            src={BACKDROP_URL_780 + backdrop_path}
          />
          <div className="card-block">
            <h1 className="black">{title}</h1>
            <p>{overview}</p>

            <button
              className="btn btn-primary"
              onClick={() => this.props.selectMovie(null)}
            >
              Back
            </button>

            <MovieComments movieId={this.props.movieId} />
          </div>
          <div className="card-footer">
            <small className="text-muted">Out since {release_date}</small>
            <small className="text-muted right">
              Rating: {vote_average}/10
            </small>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectMovie: PropTypes.func.isRequired
};
