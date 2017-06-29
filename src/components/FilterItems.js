import React from 'react';
import PropTypes from 'prop-types';

export class FilterItems extends React.Component {

    static propTypes = {
       filters: PropTypes.array.isRequired,
       selectTab: PropTypes.func.isRequired,
       counter: PropTypes.number.isRequired
    }

    defaultProps = {
        counter: 0
    }

    render() {
        return (
            <ul>
                <li className="placeholder">
                    <a data-type="all" href="#0">All</a>
                </li>
                {this.props.filters.map(filter =>
                    <li key={filter.category} onClick={() => this.props.selectTab(filter.category)}>
                        <a className={filter.selected ? 'selected' : ''}>
                            {filter.category}
                        </a>
                    </li>
                )}
                
                <li>
                    <a>{this.props.counter}</a>
                </li>
      
            </ul>
        )
    }
}