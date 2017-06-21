import React from 'react';
import PropTypes from 'prop-types';

export const FilterItems = ({filters, selectTab, counter}) => {
  const FilterList = filters.map(filter => {
    return (
      <li
        key={filter.category}
        onClick={() => selectTab(filter.category)}
        style={{display: 'inline-style'}}
      >
        <a
          className={['hand-cursor', filter.selected ? 'selected' : ''].join(
            ' '
          )}
        >
          {filter.category}
        </a>
      </li>
    );
  });

  return (
    <ul>
      <li className="placeholder">
        <a data-type="all" href="#0">All</a>
      </li>
      {FilterList}
      <li
        style={{
          color: 'white',
          float: 'right',
          bottom: '20px',
          backgroundColor: 'tomato'
        }}
      >
        <a>{counter}</a>
      </li>
    </ul>
  );
};

FilterItems.defaultProps = {
  counter: 0
};

FilterItems.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
