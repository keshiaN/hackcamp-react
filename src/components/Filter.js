import React from 'react';
import PropTypes from 'prop-types';

export class Filter extends React.Component {

    static propTypes = {
       category: PropTypes.string,
       selectTab: PropTypes.func,
       selected: PropTypes.bool
    }

    render() {
        return (
            <li onClick={this.props.selectTab}>
                <a className={this.props.selected ? 'selected' : ''}>
                    {this.props.category}
                </a>
            </li>
        )
    }
}