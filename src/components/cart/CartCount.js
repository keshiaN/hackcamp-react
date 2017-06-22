import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const _CartCount = ({count, toggleCart}) =>
  <span onClick={toggleCart}>{count}</span>;

_CartCount.propTypes = {
  count: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    count: state.cart.count
  };
};

export const CartCount = connect(mapStateToProps)(
  _CartCount
);
