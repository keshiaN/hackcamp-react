import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';

export class MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    getComments: PropTypes.func.isRequired
  };

  deleteComment = () => {
    //We need to delete the Comment (by clicking on the X span)
    //The url is SERVER_URL/comments/COMMENTID
    fetch(SERVER_URL + '/comments/' + this.props.data.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(() => this.props.getComments()); //We also want to see the comment directly deleted, without refreshing the page

  }
 

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
