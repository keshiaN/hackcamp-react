import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteComment} from '../actions/commentsActions';

class _MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired,
    token: PropTypes.string,
    dispatchDelete: PropTypes.func.isRequired,
    movieId: PropTypes.number.isRequired
  };

  //call the delete action here
  deleteComment = e => {
    e.preventDefault();
    axios.delete(`${SERVER_URL}/comments/${this.props.data.id}`, {
      headers: {Authorization: this.props.token}
    }).then(this.props.dispatchDelete());
  };

  render() {
    return (
      <div className="movie-comment">
        <div>
          <strong>{this.props.data.author}</strong>
        </div>
        <div>
          {this.props.data.content}
          <small className="right">
            <span onClick={this.deleteComment}>X</span>
          </small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToState = dispatch => ({
  //Dispatch an action to delete a comment
  dispatchDelete: commentId => dispatch(deleteComment(commentId))
});

export const MovieComment = connect(mapStateToProps, mapDispatchToState)(
  _MovieComment
);
