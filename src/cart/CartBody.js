import React from 'react';
import PropTypes from 'prop-types';

import {movie} from '../types/movie';
import {CartProduct} from './CartProduct';

export const CartBody = ({removeFromCart, closeCart, products}) =>
  <div className="cart-body">
    <button className="btn-close btn btn-danger" onClick={closeCart}>
      Close
    </button>
    <ul className="cart-product-list">
      {products.map((product, index) =>
        <li key={product.id}>
          <CartProduct removeFromCart={removeFromCart} {...product} />
        </li>
      )}
    </ul>
  </div>;

CartBody.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(movie).isRequired,
  closeCart: PropTypes.func.isRequired
};

// {...product} in JSX adding all properties of product like title, id, ... to cartproduct => title={product.title}, ...
