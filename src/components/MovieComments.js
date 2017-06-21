import React from 'react';
import PropTypes from 'prop-types';
import {MovieCommentForm} from './MovieCommentForm';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {MovieComment} from './MovieComment';
import '../css/MovieComments.css';

export class MovieComments extends React.Component {
  state = {
    comments: []
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired
  };

  //Here we need to fetch the comments on a certain movie (the url is SERVER_URL/movies/MOVIEID/comments)
  //The id of that movie is in the props

  render() {
    return (
      <div>
        <MovieCommentForm />

        <div className="movie-comments">
          {this.state.comments.map(c => <MovieComment data={c} />)}
        </div>

      </div>
    );
  }
}
