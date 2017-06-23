import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieCommentForm.css';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {addComment, deleteComment} from '../actions/commentsActions';

//REDUX FORM
//You'll have to implement this function, it has to validate the data for the redux form
const validate = data => {
  const errors = {}
  if(!data.author){
    errors.author = 'Author is required'
  } else if(data.author.charAt(0).toUpperCase() !== data.author.charAt(0)) {
    errors.author = 'Author must start with an uppercase letter'
  }
  if(!data.content){
    errors.content = 'Content is required'
  } else if(data.content.length > 150) {
    errors.content = "The content can't contain more then 150 characters"
  }
  console.log(errors);
  return errors;
};

const inputRenderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{placeholder}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const textareaRenderField = ({
  input,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <label>{placeholder}</label>
    <div>
      <textarea {...input} placeholder={placeholder}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class _MovieCommentForm extends React.Component {

  postComment = data => {
    // TODO: implement all actions for the update and add with slow server
    this.props.updateComments({movie_id: this.props.movieId, author: data.author, content: data.content, id: Math.random()})
    axios
      .post(
        `${SERVER_URL}/movies/${this.props.movieId}/comments/`,
        {
          author: data.author,
          content: data.content
        },
        {
          headers: {Authorization: this.props.token}
        }
      )
      .then((response) => this.props.updateComments(response.data))
      .catch((response) => this.props.deleteComment(1001))
  };

  updateContentText = e => {
    this.setState({content: e.target.value});
  };

  updateAuthor = e => {
    this.setState({author: e.target.value});
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.props.handleSubmit(this.postComment)}>

        <div className="form-group">
          <Field
            className="form-control"
            name="author"
            type="text"
            placeholder="Author"
            component={inputRenderField}
          />
        </div>

        <div className="form-group">
          <Field
            className="form-control"
            name="content"
            cols="30"
            rows="3"
            placeholder="Content"
            component={textareaRenderField}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    );
  }
}

_MovieCommentForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  updateComments: PropTypes.func.isRequired,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToState = (dispatch, props) => ({
  //Get the function to dispatch the add action to redux
  updateComments: comment => dispatch(addComment(comment)),
  deleteComment: commentId => dispatch(deleteComment({movie_id: props.movieId, id: commentId}))
});

export const ConnectedMovieCommentForm = connect(mapStateToProps, mapDispatchToState)(
  _MovieCommentForm
);

//TODO Uncomment the code below when you are ready to integrate redux forms
export const MovieCommentForm = reduxForm({
  form: 'comments', 
  validate
})(ConnectedMovieCommentForm);
