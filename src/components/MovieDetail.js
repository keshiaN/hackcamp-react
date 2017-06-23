import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

import {BACKDROP_URL_780} from '../constants/urls';
import {MovieComments} from './MovieComments';
import {SERVER_URL} from '../constants/config';
import {connect} from 'react-redux';

class _MovieDetail extends Component {
  state = {
    movie: null
  };

  async fetchMovieDetails(id) {
    const {data: movie} = await axios.get(`${SERVER_URL}/movies/${id}`);
    this.setState({movie});
  }

  render() {
    const {movie} = this.state;
    const {match, loggedIn} = this.props;
    const {params: {id}} = match;
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
            >
              Back
            </button>
            {loggedIn &&
              <span className="btn btn-info">
                See the comments
              </span>}
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

_MovieDetail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  loggedIn: PropTypes.bool
};

const mapStateToProps = ({auth}) => ({
  loggedIn: auth.loggedIn
});

export const MovieDetail = connect(mapStateToProps)(_MovieDetail);
