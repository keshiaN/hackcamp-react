import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieComment.css';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';

export class MovieComment extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  //We need to delete the Comment (by clicking on the X span)
  //The url is SERVER_URL/comments/COMMENTID
  //We also want to see the comment directly deleted, without refreshing the page

  render() {
    return (
      <div className="movie-comment">
        <div>
          <strong>{this.props.data.author}</strong>
        </div>
        <div>
          {this.props.data.content}
          <small className="right">
            <span>X</span>
          </small>
        </div>
      </div>
    );
  }
}
