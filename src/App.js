import React, { Component } from 'react';
import movies from './mocks/movies.json';
import filters from './mocks/filters';
import './css/Header.css';
import { Movie } from './components/Movie';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';

export class App extends Component {
  state = {
    movies,
    filters,
    sidebarOpened: false
  };

  selectTab = (category) => {
    console.log('test function selecttab - category ', category);
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
  };

  openSideBar = () => {
    console.log('toggle side bar');
    // We need to toggle the state of the sidebar here to make sure it is in an open state
    this.setState({sidebarOpened: !this.state.sidebarOpened})
  };

  render() {
    console.log(this.state.sidebarOpened);
    
    return (

      <div>
        <Header/>

        <main className="main-content">

          <FilterBar filters={this.state.filters} selectTab={this.selectTab}/>

          {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
          <section className={`gallery ${this.state.sidebarOpened ? 'filter-is-visible' : ''}`}>
            {this.state.movies.map(movie =>
              <Movie key={movie.id} data={movie} />
            )}
          </section>

          <div>
            {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
            <div className={`filter ${this.state.sidebarOpened ? 'filter-is-visible' : ''}`}>
              <form onSubmit={e => e.preventDefault}>
                <div className="filter-block">
                  <h4>Search</h4>
                  <div className="filter-content">
                    <input type="search" placeholder="title" />
                  </div>
                </div>
              </form>
              <a className="hand-cursor close-f">Close</a>
            </div>

            <a
              className="hand-cursor filter-trigger"
              onClick={this.openSideBar}>Filters</a>
          </div>

        </main>
        </div> 

    );
  }
}
