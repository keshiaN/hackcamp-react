import React, {Component} from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './components/cart/Cart';
import {getMovies} from './actions/moviesActions';
import {SERVER_URL} from './constants/config';
import {connect} from 'react-redux';

export class _App extends Component {
  state = {
    selectedPage: null
  };

  componentDidMount() {
    axios.get(`${SERVER_URL}/movies`).then(movie => movie.data).then(movies => {
      //Save the movies from the request in redux
      this.props.dispatchGetMovies(movies);
    });
  }

  selectPage = page => {
    this.setState({selectedPage: page});
  };

  render() {
    const {selectedPage} = this.state;
    return (
      <div>
        <Header />
        {Number.isInteger(selectedPage)
          ? <MovieDetail selectMovie={this.selectPage} movieId={selectedPage} />
          : selectedPage === 'stats'
            ? <Stats selectPage={this.selectPage} />
            : <Main selectMovie={this.selectPage} />}
        <Cart removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}

_App.propTypes = {
  dispatchGetMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  //Dispatch an action that will save the movies in redux
  dispatchGetMovies: movies => dispatch(getMovies(movies))
});

export const App = connect(null, mapDispatchToProps)(_App);
