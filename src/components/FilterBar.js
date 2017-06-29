import React from 'react';
import PropTypes from 'prop-types';
import { FilterItems } from './FilterItems';

export class FilterBar extends React.Component {

    static propTypes = {
       filters: PropTypes.array.isRequired,
       selectTab: PropTypes.func.isRequired,
       counter: PropTypes.number.isRequired
    }

    render() {
        return (
            <div className="tab-filter-wrapper">
              <div className="tab-filter">
                <FilterItems
                  selectTab={this.props.selectTab}
                  filters={this.props.filters}
                  counter={this.props.counter}/>
            </div>
          </div>
        )
    }
}