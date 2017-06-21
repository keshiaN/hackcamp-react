import React, { Component } from 'react';
import logo from './images/logo.svg';
import movies from './mocks/movies.json';
import filters from './mocks/filters';
import './css/Header.css';
import { Movie } from './components/Movie';

export class App extends Component {
  state = {
    movies,
    filters
  };

  selectTab = (category) => {
    console.log('category ', category);
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
  };

  openSideBar = () => {
    // We need to toggle the state of the sidebar here to make sure it is in an open state
  };

  render() {
    return (

      <div>
        <header>
          <img src="/images/logo.svg" alt="logo" />
          <h1>Flix</h1>
        </header>

        <main className="main-content">

          <div className="tab-filter-wrapper">
            <div className="tab-filter">

              <ul>

                <li className="placeholder">
                  <a data-type="all" href="#0">All</a>
                </li>

                {this.state.filters.map(filter =>
                  <li 
                    key={filter.category}
                    onClick={this.selectTab}>
                    <a className={filter.selected ? 'selected' : ''}>
                      {filter.category}
                    </a>
                  </li>
                )}

                <li className="counter">
                  <a>42</a>
                </li>

              </ul>

            </div>
          </div>

          {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
          <section className="gallery">
            {this.state.movies.map(movie =>
              <Movie key={movie.id} data={movie} />
            )}
          </section>

          <div>
            {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
            <div className="filter">
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
              onClick={this.openSideBar}
            >
              Filters
            </a>
          </div>

        </main>
        </div> 

    );
  }
}
