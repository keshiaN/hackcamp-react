import React from 'react';
import PropTypes from 'prop-types';
import filters from '../mocks/filters';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';
import {movie} from '../types/movie';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filters,
      searchValue: null,
      navClosed: true,
      selectedFilter: 'All',
      counter: 0
    };

    this.updateCounter = this.updateCounter.bind(this);
  }

  selectTab = category => {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category;
        return filter;
      }),
      selectedFilter: category
    });
  };

  closeSideBar = () => {
    this.setState({
      navClosed: true
    });
  };

  openSideBar = () =>
    this.setState({
      navClosed: false
    });

  search = event => {
    this.setState({searchValue: event.target.value});
  };

  updateCounter(counter) {
    return this.setState({counter});
  }

  render() {
    // extract properties from the state object and declare them to all listed variabled listed
    const {filters, navClosed, selectedFilter, searchValue} = this.state;

    const {addToCart, isInCart, removeFromCart, movies, selectPage} = this.props;

    return (
      <main className="main-content">

        <FilterMenu
          counter={this.state.counter}
          filters={filters}
          selectTab={this.selectTab}
          selectPage={selectPage}
        />

        <MovieList
          updateCounter={this.updateCounter}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          isInCart={isInCart}
          selectMovie={this.props.selectMovie}
          movies={movies}
          selectedFilter={selectedFilter}
          searchValue={searchValue}
          navClosed={navClosed}
        />

        <SideBarFilters
          navClosed={navClosed}
          closeSideBar={this.closeSideBar}
          onChange={this.search}
          openSideBar={this.openSideBar}
        />
      </main>
    );
  }
}

Main.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired
};
