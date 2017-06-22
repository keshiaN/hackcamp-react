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
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let newProduct = !state.products.includes(action.payload);
      return {
        ...state,
        products: newProduct
          ? [...state.products, action.payload]
          : [...state.products],
        count: newProduct ? state.count + 1 : state.count,
        previousState: state
      };

    case REMOVE_ITEM_FROM_CART:
      let alreadyRemoved = !state.products.includes(action.payload);
      return {
        ...state,
        products: state.products.filter(product => product !== action.payload),
        count: alreadyRemoved ? state.count : state.count - 1,
        previousState: state
      };

    case TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case UNDO_CART_ACTION:
      return {
        ...state.previousState
      };

    default:
      return state;
  }
};
