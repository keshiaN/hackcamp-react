import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Actions} from './../../constants/actions'

const _CartCount = ({count, toggleCart}) =>
  <span onClick={toggleCart}>{count}</span>;

_CartCount.propTypes = {
  count: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
  
  };
};

export const CartCount = connect(mapStateToProps, mapDispatchToProps)(
  _CartCount
);
