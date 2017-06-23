import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './components/cart/Cart';
import {MoviesFetcher} from './components/MoviesFetcher';

export const App = () =>
  <div>
    <Header />
    <Route exact path="/" component={Main}/>
    <Route path="/movies/:id" component={MovieDetail}/>
    <Route path="/stats" component={Stats}/>
    <MoviesFetcher />
    <Cart removeFromCart={this.removeFromCart} />
  </div>;