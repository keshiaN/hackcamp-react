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

  componentDidMount() {
    //Here we need to fetch the comments on a certain movie (the url is SERVER_URL/movies/MOVIEID/comments)
    //The id of that movie is in the props
    // fetch(SERVER_URL + '/movies/' + this.props.movieId + '/comments').then(response => response.json()).then(data => {
    //   this.setState({comments: data});
    // })
    this.getComments();
  }

  getComments = () => {
    fetch(SERVER_URL + '/movies/' + this.props.movieId + '/comments').then(response => response.json()).then(data => {
      this.setState({comments: data});
    })
  }

  render() {
    return (
      <div>
        <MovieCommentForm movieId={this.props.movieId} getComments={this.getComments}/>

        <div className="movie-comments">
          {this.state.comments.map(c => <MovieComment key={c.id} data={c} />)}
        </div>

      </div>
    );
  }
}
