import {DELETE_COMMENT, GET_COMMENTS, ADD_COMMENT} from '../constants/actions';

export const initialState = {
};

export const comments = (state = initialState, action) => {

  switch (action.type) {
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.movie_id]: state[action.payload.movie_id].filter(comment => {
          return comment.id !== action.payload.id;
        })
      }

    case GET_COMMENTS:
      return {
        ...state,
        [action.payload.movie_id]: action.payload.comments
      }

    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.movie_id]: state[action.payload.movie_id].concat(action.payload)
      }

    default:
      return {
        ...state
      }
  }
};
