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
    //We need to fetch the movies (at the url SERVER_URL/movies)
    //And then update the state with the movies
  }

  selectMovie = movieId => {
    this.setState({selectedMovie: movieId});
  };

  //Cart handling
  //We need to have functions that will tell us if a movie is in the cart,
  //add a movie to the cart and remove a movie from the cart

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
          : <Main movies={movies} selectMovie={this.selectMovie} />}
        <Cart products={cart} movies={movies} />
      </div>
    );
  }
}
