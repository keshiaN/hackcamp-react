import {combineReducers} from 'redux';
import {auth} from './authReducer';
import {cart} from './cartReducer';
import {search} from './searchReducer';


/**
 * You should pass all your reducers to combineReducers
 * Thanks, Steve!
 */
export const rootReducer = combineReducers({
    auth: auth,
    cart: cart,
    search: search
});
