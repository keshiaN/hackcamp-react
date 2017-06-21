import React from 'react';
import PropTypes from 'prop-types';

export class SideBar extends React.Component {

    static propTypes = {
        sideBarOpened: PropTypes.bool,
        openSideBar: PropTypes.func.isRequired,
        closeSideBar: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
            {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
            <div className={`filter ${this.props.sideBarOpened ? 'filter-is-visible' : ''}`}>
              <form onSubmit={e => e.preventDefault}>
                <div className="filter-block">
                  <h4>Search</h4>
                  <div className="filter-content">
                    <input type="search" placeholder="title" />
                  </div>
                </div>
              </form>
              <a className="hand-cursor close-f" onClick={this.props.closeSideBar}>Close</a>
            </div>

            <a
              className="hand-cursor filter-trigger"
              onClick={this.props.openSideBar}>Filters</a>
          </div>
        )
    }
}