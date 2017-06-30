import React, {Component} from 'react';
import axios from 'axios';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Cart} from './cart/Cart';
import {SERVER_URL} from './constants/config';

export class App extends Component {
  state = {
    selectedMovie: null,
    movies: [],
    cart: []
  };

  componentDidMount() {
    // We need to fetch the movies (at the url SERVER_URL/movies) and update the state
    fetch(SERVER_URL + '/movies').then((response) => response.json()).then(data => {
      this.setState({
        movies: data
      })
    });    
  }

  selectMovie = movieId => {
    this.setState({selectedMovie: movieId});
  };

  //Cart handling
  //We need to have functions that will tell us if a movie is in the cart,
  //add a movie to the cart and remove a movie from the cart
  removeFromCart = (movie) => {
    this.setState({
      cart: this.state.cart.filter(item => {
        return item !== movie;
      })
    })
  };

  addToCart = (movie) => {
    this.setState({
      cart: [...this.state.cart, movie]
    })
  }

  isInCart = (movie) => {
    return this.state.cart.includes(movie);
  }

  render() {
    const {selectedMovie, movies, cart} = this.state;
    return (
      <div>
        <Header />
        {selectedMovie
          ? <MovieDetail
              selectMovie={this.selectMovie}
              movieId={selectedMovie}
            />
          : <Main movies={movies} selectMovie={this.selectMovie} removeFromCart={this.removeFromCart} addToCart={this.addToCart} isInCart={this.isInCart}/>}
        <Cart products={cart} movies={movies} removeFromCart={this.removeFromCart}/>
      </div>
    );
  }
}
