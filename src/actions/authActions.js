import {LOGIN, LOGOUT} from '../constants/actions';

/**
 * @param payload: auth token
 */
export const login = () => ({
  type: LOGIN,
  payload
});

/**
 * This one takes no parameter
 */
export const logout = () => ({
  type: LOGOUT,
  payload
});
