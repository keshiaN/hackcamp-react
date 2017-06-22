import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {connect} from 'react-redux';

class _MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired,
    token: PropTypes.string
  };

  deleteComment = e => {
    e.preventDefault();
    axios
      .delete(`${SERVER_URL}/comments/${this.props.data.id}`, {
        headers: {Authorization: this.props.token}
      })
      .then(this.props.updateComments);
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

export const MovieComment = connect(mapStateToProps)(_MovieComment);
