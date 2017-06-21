import React from 'react';
import '../css/MovieCommentForm.css';

export class MovieCommentForm extends React.Component {

  constructor(props) {
    super(props)

  }

  //There are a few things to implement here
  //First: We need to know what the user has entered in the input field
  //Second: We need to implement the function that will actually post the comment (on the url SERVER_URL/movies/MOVIEDID/comments)
  //Third: We also want to see our comment directly on the page, without refreshing the page
  //Hint: We need to refetch all the comments in the parent when the post is done

  postComment(){
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
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="content"
            id="content"
            cols="30"
            rows="3"
          />
        </div>

        <button className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

MovieCommentForm.propTypes = {};
