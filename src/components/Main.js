import React from 'react';
import PropTypes from 'prop-types';
import {FilterBar} from './FilterBar';
import {SideBar} from './SideBar';
import {Movie} from './Movie';
import {MovieList} from './MovieList';
import movies from '../mocks/movies.json';
import filters from '../mocks/filters';
import genres from '../mocks/genres';
import {getGenreId, movieContainsGenre} from '../lib/utils';


export class Main extends React.Component {

    state = {            
        filters,
        movies,
        searchValue: null,
        sideBarOpened: false
    };

    selectTab = (category) => {
        // We need to update the `selected` property of the clicked category to be true.
        this.setState({
            filters: filters.map(filter => {
                filter.selected = filter.category === category;
                return filter;
            })
        });
        this.filterMovies();
    }

    filterMovies() {
        const selectedFilter = this.state.filters.filter(f => {
            return f.selected
        })[0].category;

        // Filter movies based on the selected filter
        this.setState({
            movies: movies.filter(
                movie =>
                (selectedFilter === 'All' ||
                    movieContainsGenre(movie, getGenreId(selectedFilter))) &&
                (!this.state.searchValue ||
                    movie.title
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()))
            )
        });
    }

    openSideBar = () => {
        // set the state of the sidebar when opening
        this.setState({sideBarOpened: true})
    };

    closeSideBar = () => {
        this.setState({sideBarOpened: false})
    }

    search = (event) => {
        // search movies based on the search value from the sidebar
        this.setState({searchValue: event.target.value})
        this.filterMovies()
    }

    render() {
        return (
            <main className="main-content">

                <FilterBar 
                    filters={this.state.filters} 
                    selectTab={this.selectTab}
                    counter={this.state.movies.length}/>

                <MovieList
                    movies={this.state.movies}
                    sideBarOpened={this.state.sideBarOpened}/>
               
                <SideBar
                    openSideBar={this.openSideBar}
                    closeSideBar={this.closeSideBar}
                    sideBarOpened={this.state.sideBarOpened}
                    search={this.search}/>

            </main>
        )
    }
}