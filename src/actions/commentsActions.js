import {GET_COMMENTS, DELETE_COMMENT, ADD_COMMENT} from '../constants/actions';

export const getComments = payload => ({
  type: GET_COMMENTS,
  payload
});

export const deleteComment = payload => ({
  type: DELETE_COMMENT,
  payload
});

export const addComment = payload => ({
  type: ADD_COMMENT,
  payload
});


