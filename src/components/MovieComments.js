import React from 'react';
import PropTypes from 'prop-types';
import {MovieCommentForm} from './MovieCommentForm';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {MovieComment} from './MovieComment';
import '../css/MovieComments.css';
import {connect} from 'react-redux';

class _MovieComments extends React.Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
    loggedIn: PropTypes.bool,
    dispatchGet: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    )
  };

  fetchComments = () => {
    axios
      .get(`${SERVER_URL}/movies/${this.props.movieId}/comments`)
      .then(response => {
        //Store the comments in redux
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>

        {this.props.loggedIn &&
          <MovieCommentForm
            movieId={this.props.movieId}
            updateComments={this.fetchComments}
          />}

        <div className="movie-comments">

          {this.props.comments &&
            this.props.comments.map(c => {
              return (
                <MovieComment
                  key={c.id}
                  data={c}
                  updateComments={this.fetchComments}
                  movieId={this.props.movieId}
                />
              );
            })}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.loggedIn
  //Get the comments from the state
});

const mapDispatchToState = dispatch => ({
  //Get the action to dipatch the comments in the state
});

export const MovieComments = connect(mapStateToProps, mapDispatchToState)(
  _MovieComments
);
