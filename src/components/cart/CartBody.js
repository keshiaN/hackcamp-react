import React from 'react';
import PropTypes from 'prop-types';

import {movie} from '../../types/movie';
import {CartProduct} from './CartProduct';
import {toggleCart, undo} from '../../actions/cartActions';
import {connect} from 'react-redux';

const isEmpty = previousState => Object.keys(previousState).length === 0;

const _CartBody = ({closeCart, products, previousState, undo}) => {
  return (
    <div className="cart-body">
      <button className="btn-close btn btn-danger" onClick={closeCart}>
        Close
      </button>
      {!isEmpty(previousState) &&
        <button className="btn-close btn btn-info" onClick={undo}>
          Undo
        </button>}
      <ul className="cart-product-list">
        {products.map((product, index) =>
          <li key={index}>
            <CartProduct {...product} />
          </li>
        )}
      </ul>
    </div>
  );
};

_CartBody.propTypes = {
  previousState: PropTypes.object.isRequired,
  undo: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(movie).isRequired,
  closeCart: PropTypes.func.isRequired
};

const mapStateToProps = ({cart}) => ({
  previousState: cart.previousState
});

const mapDispatchToProps = dispatch => ({
  closeCart: () => dispatch(toggleCart()),
  undo: () => dispatch(undo())
});

export const CartBody = connect(mapStateToProps, mapDispatchToProps)(_CartBody);
