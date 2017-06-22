import {LOGIN, LOGOUT} from '../constants/actions';
import {filters} from '../constants/filters';

export const initialState = {
  loggedIn: false,
  token: null
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Looks like Steve didnt write the test for this switch case ...
     */
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        token: action.payload
      };
    /**
     * Steve also forgot to implement a few switch cases here...
     * You should implement the missing switch cases
     **/
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null
      };

    default:
      return state;
  }
};
