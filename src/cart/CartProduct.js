import React from 'react';
import PropTypes from 'prop-types';

import {movieProps} from '../types/movie';
import {THUMBNAIL_URL} from '../constants/urls';

export const CartProduct = ({removeFromCart, poster_path, title, id}) =>
  <div className="cart-product">
    <img
      alt="Cover of the movie"
      className="img-thumbnail thumb-cart"
      src={`${THUMBNAIL_URL}${poster_path}`}
    />
    <div>
      <span className="cart-product-title">
        {title}
      </span>
      <button
        onClick={() => removeFromCart(id)}
        className="btn btn-delete btn-info"
      >
        Delete
      </button>
    </div>
  </div>;

CartProduct.propTypes = {
  ...movieProps,
  removeFromCart: PropTypes.func.isRequired
};

// ...movieProps => it's the same as defining all props in the propTypes like this
//    vote_count: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   video: PropTypes.bool.isRequired,
//   vote_average: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   popularity: PropTypes.number.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   original_language: PropTypes.string.isRequired,
//   original_title: PropTypes.string.isRequired,
//   genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
//   backdrop_path: PropTypes.string.isRequired,
//   adult: PropTypes.bool.isRequired,
//   overview: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired
