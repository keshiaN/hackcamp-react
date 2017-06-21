import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PICTURES_CDN_URL} from '../constants/urls';
import '../css/movie.css';

const shorten = (text, limit = 140) =>
  text.split('').slice(0, limit).join('') + '...';

export class Movie extends Component {
  //We need to keep track on whether the Movie is hovered or not
  render() {
    const {data, selectMovie, addToCart, isInCart, removeFromCart} = this.props;
    return (
      <div className="movie" onMouseEnter="" onMouseLeave="">
        <img
          alt={`${data.title}'s cover`}
          src={PICTURES_CDN_URL + data.poster_path}
        />
        {/*You need to add or remove the show-movie-body in the className property
        if the movie is hovered/not hovered*/}
        <div className={`movie-body`}>
          <h1>{data.title}</h1>
          <p>{shorten(data.overview)}</p>
          {isInCart(data.id)
            ? <button
                onClick={() => removeFromCart(data.id)}
                className="btn btn-danger"
              >
                Supprimer du cart
              </button>
            : <button
                onClick={() => addToCart(data.id)}
                className="btn btn-success"
              >
                Add to cart
              </button>}
          <button className="btn btn-link" onClick={() => selectMovie(data.id)}>
            See details
          </button>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};
