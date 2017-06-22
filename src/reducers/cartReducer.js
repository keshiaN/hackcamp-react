import {
  UNDO_CART_ACTION,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART
} from '../constants/actions';

export const initialState = {
  previousState: {},
  products: [],
  count: 0,
  isOpen: false
};

export const cart = (state = initialState, action = {}) => {
  /**
   * "the first test passes, its good enough for me" said Steve
   * five minutes before getting fired .. I mean going on "vacations"
   **/
};
