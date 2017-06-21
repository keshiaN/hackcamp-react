import React from 'react';
import '../css/MovieCommentForm.css';
import {SERVER_URL} from '../constants/config';
import PropTypes from 'prop-types';

export class MovieCommentForm extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    author: '',
    content: ''
  }

  //There are a few things to implement here
  //First: We need to know what the user has entered in the input field
  inputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //Second: We need to implement the function that will actually post the comment (on the url SERVER_URL/movies/MOVIEDID/comments)
  //Third: We also want to see our comment directly on the page, without refreshing the page
  //Hint: We need to refetch all the comments in the parent when the post is done


  postComment = (event) => {
    event.preventDefault();
    console.log('post comment ', this.state);
    fetch(SERVER_URL + '/movies/' + this.props.movieId + '/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: this.state.author,
        content: this.state.content,
      })});
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.postComment}>

        <div className="form-group">
          <input
            className="form-control"
            name="author"
            id="author"
            type="text"
            placeholder="Author"
            onChange={this.inputChanged}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="content"
            id="content"
            cols="30"
            rows="3"
            onChange={this.inputChanged}
          />
        </div>

        <button className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

MovieCommentForm.propTypes = {
  movieId: PropTypes.number.isRequired
};
