import {GET_MOVIES} from '../constants/actions';

export const initialState = [];

export const moviesReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_MOVIES:
      return action.payload

    default:
      return state
      
  }
};

