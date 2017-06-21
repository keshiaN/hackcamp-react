import React, { Component } from 'react';
import movies from './mocks/movies.json';
import filters from './mocks/filters';
import './css/Header.css';
import { Movie } from './components/Movie';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { SideBar } from './components/SideBar';

export class App extends Component {
  state = {
    movies,
    filters,
    sideBarOpened: false
  };

  selectTab = (category) => {
    console.log('test function selecttab - category ', category);
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
  };

  openSideBar = () => {
    // We need to toggle the state of the sidebar here to make sure it is in an open state
    this.setState({sideBarOpened: true})
  };

  closeSideBar = () => {
    this.setState({sideBarOpened: false})
  }

  render() {    
    return (

      <div>
        <Header/>

        <main className="main-content">

          <FilterBar filters={this.state.filters} selectTab={this.selectTab}/>

          {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
          <section className={`gallery ${this.state.sideBarOpened ? 'filter-is-visible' : ''}`}>
            {this.state.movies.map(movie =>
              <Movie key={movie.id} data={movie} />
            )}
          </section>

          <SideBar openSideBar={this.openSideBar} closeSideBar={this.closeSideBar} sideBarOpened={this.state.sideBarOpened}/>

        </main>
        </div> 

    );
  }
}
