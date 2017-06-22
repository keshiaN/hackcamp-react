import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART,
  UNDO_CART_ACTION
} from '../constants/actions';

/**
 * @param payload: id of the item you wish to remove from your cart
 */
export const removeFromCart = payload => ({
  type: REMOVE_ITEM_FROM_CART,
  payload
});
