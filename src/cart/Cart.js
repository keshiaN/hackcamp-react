import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/cart.css';
import {movie} from '../types/movie';
import {CartBody} from './CartBody';

export class Cart extends Component {
  state = {
    open: false,
    count: 42,
    products: []
  };

  componentDidMount() {
    this.getProducts(this.props.products);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.products !== nextProps.products) {
      this.getProducts(nextProps.products);
    }
  }

  getProducts = (ids = [285]) => {
    const products = [];
    //We need to transform the array of ids into an array of movies here
    this.setState({products});
  };

  toggleCart = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {open, products} = this.state;
    const {removeFromCart} = this.props;
    return (
      <div className={`cart-wrapper ${open ? 'cart-open' : ''}`}>
        {!open
          ? <span onClick={this.toggleCart}>{products.length}</span>
          : <CartBody
              removeFromCart={removeFromCart}
              closeCart={this.toggleCart}
              products={products}
            />}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired
};
