import React from 'react';
import PropTypes from 'prop-types';
import {Movie} from './Movie';

export class MovieList extends React.Component {

    static propTypes = {
        movies: PropTypes.array.isRequired,
        sideBarOpened: PropTypes.bool.isRequired,
        selectMovie: PropTypes.func.isRequired
    }

    render() {
        return (
            <section
                className={`gallery ${this.props.sideBarOpened ? 'filter-is-visible' : ''}`}>
                {this.props.movies.map(movie =>
                    <Movie 
                        key={movie.id} 
                        data={movie}
                        onMovieClicked={this.props.selectMovie}/>
                    )}
            </section>
        )
    }
}