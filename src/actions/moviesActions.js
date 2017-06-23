import {GET_MOVIES} from '../constants/actions';

export const getMovies = (payload) => ({
    type: GET_MOVIES,
    payload
});
