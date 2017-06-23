import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './components/cart/Cart';
import {MoviesFetcher} from './components/MoviesFetcher';

export const App = () =>
  <div>
    <Header />
    <MoviesFetcher />
    <Cart removeFromCart={this.removeFromCart} />
  </div>;
