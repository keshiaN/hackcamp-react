import {LOGIN, LOGOUT} from '../constants/actions';

/**
 * @param payload: auth token
 */
export const login = (payload) => ({
  type: LOGIN,
  payload
});

/**
 * This one takes no parameter
 */
export const logout = (payload) => ({
  type: LOGOUT,
  payload
});
