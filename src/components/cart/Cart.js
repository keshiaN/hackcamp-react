import React from 'react';
import PropTypes from 'prop-types';

import '../../css/cart.css';
import {movie} from '../../types/movie';
import {CartBody} from './CartBody';
import {toggleCart} from '../../actions/cartActions';
import {connect} from 'react-redux';

const _Cart = props => {
  const {toggleCart, products, isOpen, count} = props;
  return (
    /** 
     * You need to add the 'cart-open' class in order to open your cart 
     * If the cart is open, return <CartBody /> otherwise return <CartCount />
     **/
    <div className="cart-wrapper" />
  );
};

_Cart.propTypes = {
  products: PropTypes.array.isRequired,
  toggleCart: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired
};

_Cart.defaultProps = {
  isOpen: false,
  count: 0,
  products: []
};

/**
 * Your component needs isOpen, count and products from rootReducer.cart
 *
 * Products will be an array of ids
 *
 * You need to transform that into an array of movies
 *
 * You'll receive the complete list of movies in ownProps.movies
 *
 * @param state: State tree of your redux store
 * @param ownProps: Props received from the parent
 */
const mapStateToProps = (state, ownProps = {}) => ({});

/*
 * You should give "toggleCart"
 * as a prop to your component
 * using mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({});

export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);

Cart.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired
};
