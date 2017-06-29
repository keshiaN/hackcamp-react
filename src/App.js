import React, { Component } from 'react';
import './css/Header.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

export class App extends Component {

  render() {    
    return (

      <div>
        <Header/>
        <Main/>
      </div> 

    );
  }
}
