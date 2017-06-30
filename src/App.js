import React, { Component } from 'react';
import './css/Header.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { MovieDetail } from './components/MovieDetail';

export class App extends Component {

  state = {
    selectedMovie: null
  }

  selectMovie = (movieId) => {
    this.setState({selectedMovie: movieId})
  }

  render() {    
    return (

      <div>
        <Header/>
        {this.state.selectedMovie ? 
          <MovieDetail
            selectedMovie={this.state.selectedMovie}
            selectMovie={this.selectMovie}/>
          :
          <Main selectMovie={this.selectMovie}/>}
      </div> 

    );
  }
}
